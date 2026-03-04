
import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

// API routes
app.get("/api/ratings", async (req, res) => {
  if (!supabase) {
    return res.json({});
  }

  try {
    const { data, error } = await supabase
      .from('ratings')
      .select('location_id, rating');

    if (error) throw error;

    const aggregated = (data || []).reduce((acc: any, curr: any) => {
      if (!acc[curr.location_id]) {
        acc[curr.location_id] = { totalRating: 0, count: 0 };
      }
      acc[curr.location_id].totalRating += curr.rating;
      acc[curr.location_id].count += 1;
      return acc;
    }, {});

    res.json(aggregated);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Failed to fetch ratings" });
  }
});

app.post("/api/ratings", async (req, res) => {
  const { locationId, rating } = req.body;
  
  if (!locationId || typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Invalid rating" });
  }

  if (!supabase) {
    return res.status(503).json({ error: "Database not configured" });
  }

  try {
    const { error } = await supabase
      .from('ratings')
      .insert([{ location_id: locationId, rating }]);

    if (error) throw error;

    res.json({ success: true });
  } catch (error) {
    console.error("Error posting rating:", error);
    res.status(500).json({ error: "Failed to post rating" });
  }
});

// Setup Vite or Static serving
async function setup() {
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  // Only listen if not on Vercel
  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

setup();

export default app;
