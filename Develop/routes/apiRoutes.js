// LOAD DATA
// Linking routes to data source, aka db.json file.

const notesData = require('../db/db.json');

// ROUTING

module.exports = (app) => {
  // API GET Request

  app.get('/api/notes', (req, res) => res.json(notesData));
  
  // API POST Requests
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    console.log(newNote);

    notesData.push(newNote);

    res.json(newNote);
  })
}