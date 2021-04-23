// LOAD DATA
// Linking routes to data source, aka db.json file.

const notesData = require('../db/db.json');

// ROUTING

module.exports = (app) => {
  // API GET Request
  // Below code handles when users "visit" a page.

  app.get('/api/notes', (req, res) => res.json(notesData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User writes out a note... this data is then sent to the server...
  // Then the server saves the data to the notesData json)
  // ---------------------------------------------------------------------------

  /*app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });*/
};
