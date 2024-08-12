"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import the express module
const port = 5000;
const app = (0, express_1.default)(); // Create an Express app
app.use(express_1.default.json()); // middleware to parse JSON request bodies
app.get('/hii', (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
