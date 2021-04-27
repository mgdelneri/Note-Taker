const fs = require('fs');
const uniqid = require('uniqid');

// ROUTING
module.exports = (app) => {
  // API GET Request
  app.get('/api/notes', (req, res) => {
    // Read data in array in db.json file
    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
    error ? console.error(error) : console.log(data);
    // Parsing string into an object
    let dataJson = JSON.parse(data);
    res.json(dataJson);
    })
  })
  
  // API POST Requests
  app.post('/api/notes', (req, res) => {
    // New note saved on the request body
    const newNote = req.body;
    // Give newNote unique id
    newNote.id = uniqid();

    // Read contents of db.json file
    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
      error ? console.error(error) : console.log(data);
      let dataJson = JSON.parse(data);
      // Add newNote to existing array
      dataJson.push(newNote);
      // Write array back in db.json file
      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(dataJson), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.send(dataJson);
      });
    })
  })

  // API DELETE Requests
  app.delete('/api/notes/:id', (req, res) => {
    const chosen = req.params.id;

    // Read data in array in db.json file
    fs.readFile(__dirname + '/../db/db.json', 'utf8', (error, data) => {
      error ? console.error(error) : console.log(data);
      let dataJson = JSON.parse(data);
      // Filter through array to choose the ones that were not chosen to delete
      var newData = dataJson.filter(x => {
        return x.id != chosen;
      })
      // Write updated data back into array in db.json file
      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(newData), function (err) {
        if (err) throw err;
        console.log('Updated!');
        res.send(newData);
      });
    })
  })
}