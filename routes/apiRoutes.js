const fs = require('fs');
const uniqid = require('uniqid');

// ROUTING
module.exports = (app) => {
  // API GET Request
  app.get('/api/notes', (req, res) => {
    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
    error ? console.error(error) : console.log(data);
    let dataJson = JSON.parse(data);
    res.json(dataJson);
    })
  })
  
  // API POST Requests
  app.post('/api/notes', (req, res) => {
    // New note saved on the request body
    const newNote = req.body;
    newNote.id = uniqid();
    console.log(newNote);

    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
      error ? console.error(error) : console.log(data);
      let dataJson = JSON.parse(data);
      dataJson.push(newNote);
      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(dataJson), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.send(dataJson);
      });
    })
  })

  app.delete('/api/notes/:id', (req, res) => {
    const chosen = req.params.id;

    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
      error ? console.error(error) : console.log(data);
      let dataJson = JSON.parse(data);
      
      var newData = dataJson.filter(x => {
        return x.id != chosen;
      })
      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(newData), function (err) {
        if (err) throw err;
        console.log('Updated!');
        res.send(newData);
      });
    })
  })
}