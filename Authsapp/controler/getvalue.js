const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database and Collection
const dbName = 'AuthsApp';
const collectionName = 'TOUR';

 exports.fetchTours = async(req,res)=> {
  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect the client to the server
    await client.connect();

    // Connect to the database and collection
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    // Fetch the documents from the collection
    const tours = await collection.find().toArray();
     return tours;
    // console.log('Tours:', tours);
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function


