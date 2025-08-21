import express from "express";
const router = express.Router();



router.get("/", (req, res) => {
  res.send("get all movies list");
});


router.post("/", (req, res) => {
  res.send("create a movie");
});

router.put("/:id", (req, res) => {
  res.send(`update a movie with id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete a movie with id ${req.params.id}`);
});

export default router;
