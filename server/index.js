const path = require('path');
const express = require('express');
const fs = require('fs');
const { Database } = require('./db');

const app = express();
const port = process.env.PORT || 9000;
const distName = '/dist';
const publicPath = path.join(__dirname, '..', distName);
const entryName = 'index.html';
const entryPath = path.join(publicPath, entryName);
const database = new Database('db.json');

// Init database
try {
  database.init(); 
} catch (error) {
  console.error(error);
  return;
}

app.get('/data', (req, res) => {
  res.send(database.read());
});

// TODO: add, update, remove

// Check if /dist and /dist/index.html exists
try {
  if (!fs.existsSync(publicPath)) {
    console.error(`Path to ${distName} does not exist`);
    return;
  }

  if (!fs.existsSync(entryPath)) {
    console.error(`Path to ${entryName} does not exist`);
    return;
  }
} catch (error) {
  console.error(error);
  return;
}

app.use(express.static(publicPath));

// Main react application
app.get('/', (req, res) => {
  console.log(req.params);
  res.sendFile(entryPath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});