const path = require('path');
const fs = require('fs');

const dbStruct = {
  labels: [],
  items: [],
};

class Database {

  // Name of the database file
  constructor(name) {
    this.name = name;
    this.path = path.join(__dirname, '..', name);
  }

  // Initialize the database file (json file)
  init() {
    // Create file at root level if it does not exist
    if (!fs.existsSync(this.path)) {
      console.log(`Creating ${this.name} as it does not exist...`);
      fs.writeFileSync(this.path, JSON.stringify(dbStruct));
      this.db = dbStruct;

      return;
    }

    // Read from file and save to db
    console.log(`Reading database from ${this.name}...`);
    const data = fs.readFileSync(this.path);
    this.db = JSON.parse(data);

    if (!this.db.hasOwnProperty('items') || !this.db.hasOwnProperty('labels') || !Array.isArray(this.db.items)) {
      throw 'Database corrupted...';
    }

    console.log(this.db);
  }

  read() {
    const labels = this.db.labels;
    const validItems = this.db.items.filter(item => item.valid);

    return { labels, items: validItems };
  }

  // Dumb af but just overwrite the file with current db
  save() {
    fs.writeFile(this.path, JSON.stringify(this.db), (error) => {
      if (error) throw error;
      console.log('Database saved...');
    });
  }

  addLabel({ label }) {
    if (label !== "") {
      this.db.labels.push(label);
      this.save();
      return;
    }

    throw 'Label value incorrect...';
  }

  addItem({ label, type, content }) {
    const id = this.db.items.length;
    const newItem = { id, label, type, content, valid: true };
    this.db.items.push(newItem);
    this.save();
  }

  updateItem({ id, label, type, content }) {
    if (id >= this.db.items.length) {
      throw `Could not update item since given id: ${id} is out of bounds...`;
    }

    // Search for previous item and mark it as false
    this.db.items[id].valid = false;

    const newId = this.db.items.length;
    const newItem = { id: newId, label, type, content, valid: true };
    this.db.items.push(newItem);
    this.save();
  }

  removeItem({ id }) {
    if (id >= this.db.items.length) {
      throw `Could not remove item since given id: ${id} is out of bounds...`;
    }

    this.db.items[id].valid = false;
    this.save();
  }
}

module.exports = {
  Database,
};
