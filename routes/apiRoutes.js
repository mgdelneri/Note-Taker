const fs = require('fs');
const uniqid = require('uniqid');

console.log(uniqid());

// const { v4: uuidv4 } = require('uuid');
// const newID = uuidv4();

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
    const newNote = req.body;
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
}