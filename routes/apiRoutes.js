const fs = require('fs');

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
    res.send("POST Request Called")
    //?????
  })
}