"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bookrouter_1 = __importDefault(require("./routes/bookrouter"));
var bodyParser = require('body-parser');
var app = express_1.default();
var port = 3000;
app.use(bodyParser.json());
app.use('/book', bookrouter_1.default);
app.listen(port, function () {
    console.log("server running");
});
