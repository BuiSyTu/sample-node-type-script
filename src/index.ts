import express = require("express");
import { hello } from "./controller/home.controller";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", hello);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});