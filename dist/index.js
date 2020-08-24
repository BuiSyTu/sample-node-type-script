"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const home_controller_1 = require("./controller/home.controller");
const app = express();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", home_controller_1.hello);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map