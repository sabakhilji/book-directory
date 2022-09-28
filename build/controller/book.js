"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatebook = exports.getbooks = exports.createbook = void 0;
var books_1 = require("../models/books");
var books = [];
var createbook = function (req, res, next) {
    var name = req.body.name;
    var author = req.body.author;
    var id = Math.random().toString();
    var newbook = new books_1.book(name, author, id);
    books.push(newbook);
    res.status(201).json({ message: 'new book created', createdbook: newbook });
};
exports.createbook = createbook;

var getbooks = function (req, res, next) {
    res.status(200).json({ "books": books });
};
exports.getbooks = getbooks;

var updatebook = function (req, res, next) {
    var updateid = req.params.id;
    var updatedname = req.body.name;
    var bookindex = books.findIndex(function (x) { return x.id == updateid; });
    if (bookindex < 0) {
        throw new Error('could not find book');
    }
    books[bookindex] = new books_1.book(updatedname, books[bookindex].author, books[bookindex].id);
    res.status(201).json({ message: 'book update successfully', updateid: books[bookindex] });
};
exports.updatebook = updatebook;
