import Movie from "../models/movie.model.js";
export const MovieIndex = (req, res) => {
  res.send("get all movies list");
};

export const MovieCreate = async (req, res) => {
  //id, title, desc
  // console.log(req.body);

  // validate your data
  const newMovie  = new Movie({
    title: req.body.title,
    desc: req.body.desc
  });
  try {
      const movie = await newMovie.save();
      return res.status(201).json(movie);
  }
  catch(error){
      return res.status(400).json({message: error.message});
  }
  

  // return res.json(req.body);
};


export const MovieUpdate = (req, res) => {
  res.send("update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("delete a movie");
}; 
