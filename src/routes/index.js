const books = require('../controllers/books');

module.exports = function(router){
    router.get('/', books.list);

    router.post('/book', books.add)
}
