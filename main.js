import express from "express";
import movieRoutes from "./routes/movies.route.js"; 
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "hello students!!" });
});
app.use("/movies", movieRoutes);

// ✅ Connect DB first, then start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
