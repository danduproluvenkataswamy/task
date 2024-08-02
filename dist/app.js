"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Introduction to Express.js: Setting up an Express server. Create basic routes and middleware.
//  Express.js is a popular web framework for Node.js that makes it easier to build web applications and APIs. Let’s walk through setting up a basic Express server, creating routes, and using middleware.
const express_1 = __importDefault(require("express")); // Import the express module
const port = 1000;
const app = (0, express_1.default)(); // Create an Express app
app.use(express_1.default.json()); // middleware to parse JSON request bodies
app.get('/hii', (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
