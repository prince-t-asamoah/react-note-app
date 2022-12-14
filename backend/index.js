const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { 
  getAllNotes, createNote 
} = require('./controllers');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send('<h1 style="text-align:center;">React Note App</h1>');
});

app.get('/note/all', getAllNotes);
app.post('/note/new', createNote);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;