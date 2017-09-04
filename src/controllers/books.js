const books  = require('../modals/books').getInstance();

module.exports.list = async(ctx) => {
    try {
        ctx.body = await books.listBooks();
    } catch(e) {
        console.log(e);
    }
}

module.exports.add = async(ctx, next) => {
    try {
        ctx.body = await books.addBooks(ctx.request.body);
    } catch(e) {
        console.log(e);
    }
}
