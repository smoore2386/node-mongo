const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db)=> {
  console.log("Connected successfully to server");
  let collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], (err, result)=> {
    console.log("Inserted 3 documents into the collection");
    console.log(result);
  });
  db.close();
});
