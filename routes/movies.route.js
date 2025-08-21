import express from "express";
import{
    MovieCreate,
    MovieDelete,
    MovieIndex,
    MovieUpdate,
} from "../controllers/movies.controllers";

const router = express.Router();


// R - for reading
router.get("/", MovieIndex);

// C - for creating movies
router.post("/", MovieCreate);

// U - for updating movie
router.put("/:id", MovieUpdate);

// D - for delete movie
router.delete("/:id", MovieDelete);

export default router;
