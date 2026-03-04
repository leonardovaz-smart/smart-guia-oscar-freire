
import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // In-memory store for ratings
  // Map of locationId -> { totalRating: number, count: number }
  const ratings: Record<string, { totalRating: number, count: number }> = {};

  // API routes
  app.get("/api/ratings", (req, res) => {
    res.json(ratings);
  });

  app.post("/api/ratings", (req, res) => {
    const { locationId, rating } = req.body;
    
    if (!locationId || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Invalid rating" });
    }

    if (!ratings[locationId]) {
      ratings[locationId] = { totalRating: 0, count: 0 };
    }

    ratings[locationId].totalRating += rating;
    ratings[locationId].count += 1;

    res.json({ 
      locationId, 
      averageRating: ratings[locationId].totalRating / ratings[locationId].count,
      count: ratings[locationId].count 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
