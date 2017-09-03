//global.booksData = global.mongoDB.collection('booksData');
console.log('This is the global');
class Books {
    listBooks(){
        console.log("Listing modal is getting called");
       // global.booksData.find().toArray();
	global.booksData.count();
    }

    addBooks(bookEntry){
        console.log(bookEntry);
        if(Object.keys(bookEntry).length > 0){
            global.booksData.insert(bookEntry);
        } else {
            console.error(406, 'Book details required');
        }

    }
}

module.exports.getInstance = function(){
    return new Books();
}
