const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/books';

module.exports.connect = async function(){
    mongoDB = await MongoClient.connect(MONGO_URL);
    booksData = mongoDB.collection('booksData');
    console.log('Connection to database has been established successfully');
}
