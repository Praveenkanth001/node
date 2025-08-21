import express from "express";

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({msg: "hello students"});
});

// CRUD functionality of movies
//R - for reading
app.get('/movies',()=>{

})
//C - for creating movies
app.post('/movies',()=>{

})

// U - for updating movies
app.put('/movies/:id',()=>{

})

// D - for deleting movies
app.delete('/movies/:id',()=>{

})
app.listen(PORT, () => {
    console.log(`the server is running at http://localhost:${PORT}`);
});

