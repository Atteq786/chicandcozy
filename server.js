import express from "express";
import bcrypt from "bcrypt";

//init server

const app = express();

//middlewares
app.use(express.static("public/css"));
app.use(express.json());  //enables form sharing

//routes
//home route

app.get(`/`, (req, res) => {
    res.sendFile("index.html", { root: "public" })
});


app.get(`404`, (req, res) => {
    res.sendFile("404.html", { root: "public" })
});

app.use((req, res, next) => {
    if (req.url !== '/404') {
        res.redirect("/404");
    } else {
        next(); // Allow the next middleware to handle the /404 request
    }
});

let port = 8080;
app.listen(port, () => {
    console.log("listening to the port")
    
});