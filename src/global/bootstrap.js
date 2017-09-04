const MongoClient = require('mongodb').MongoClient;

module.exports.connect = async function(){
    mongoDB = await MongoClient.connect(process.env.MONGO_URL);
    booksData = mongoDB.collection('booksData');
    console.log('Connection to database has been established successfully');
}
