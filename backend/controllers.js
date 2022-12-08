const db = require('./supabase');
const note = db.from('note');

const getAllNotes = async (_req, res) => {
  const { data, error } = await note.select('*');
  if (error) {
    res.json({error});
  } else  {
    res.json(data);
  }
};

module.exports = {
  getAllNotes
}
