const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017/books';

module.exports.connect = async function(app){
    MongoClient.connect(MONGO_URL)
        .then((connection) => {
            console.log('Connection to database has been established successfully');
            app.booksData = connection.collection('booksData');
        })
        .catch((err) => {
            console.error(err);
        })
}
