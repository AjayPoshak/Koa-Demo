class Books {
    listBooks(){
        return booksData.find().toArray();
    }

    addBooks(bookEntry){
        console.log(bookEntry);

        if(Object.keys(bookEntry).length > 0){
            bookEntry.createdAt = new Date();
            return booksData.insert(bookEntry, {safe:true});
        } else {
            return {
                error : {
                    message: 'Invalid data',
                    code: 1002
                }
            }
        }

    }
}

exports.getInstance = function(){
    return new Books();
}
