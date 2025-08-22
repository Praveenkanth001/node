import express from "express";
import movieRoutes from "./routes/movies.route.js"; 
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;
//connect DB
connectDB();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test root route
app.get("/", (req, res) => {
  res.json({ msg: "hello students!!" });
});

// Movies routes
app.use("/movies", movieRoutes);



app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
