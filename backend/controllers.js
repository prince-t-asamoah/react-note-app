const db = require('./supabase');
const note = db.from('note');
const uuid = require('uuid');

const getAllNotes = async (_req, res) => {
  const { data, error } = await note.select('*');
  if (error) {
    res.status(500);
  } else  {
    res.json(data);
  }
};

const createNote = async (req, res) => {
  const  {title, content} = req.body;
  const newNote = {
    id: uuid.v4(),
    title,
    content
  }
  const { error } = await note.insert(newNote);
  if (error) {
    res.status(500);
  } else {
    res.status(201);
  }
}

module.exports = {
  getAllNotes,
  createNote
}
