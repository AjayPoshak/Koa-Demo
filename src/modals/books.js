//global.booksData = global.mongoDB.collection('booksData');
console.log('This is the global');
class Books {
    listBooks(){
        console.log("Listing modal is getting called");
        return global.booksData.find().toArray();
    }

    addBooks(bookEntry){
        console.log(bookEntry);
        if(Object.keys(bookEntry).length > 0){
            bookEntry.createdAt = new Date();
            return global.booksData.insert(bookEntry);
        } else {
            console.error(406, 'Book details required');
        }

    }
}

module.exports.getInstance = function(){
    return new Books();
}
