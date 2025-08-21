import express from "express";
import movieRoutes from "./routes/movies.route.js"; 
console.log("movieRoutes value:", movieRoutes);  // <- note the .js

const app = express();
const PORT = 6970;

// Middleware
app.use(express.json());

// Test root route
app.get("/", (req, res) => {
  res.json({ msg: "hello students!!" });
});

// Movies routes
app.use("/movies", movieRoutes);
console.log("Movies router mounted!");

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
