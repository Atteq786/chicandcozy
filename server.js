import express from "express";
import bcrypt from "bcrypt";

//init server

const app = express();

//middlewares
app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.json());  //enables form sharing

//routes
//home route

app.get(`/`, (req, res) => {
    res.sendFile("index.html", { root: "public" })
});

//Signup 
app.get(`/signup`, (req, res) => {
    res.sendFile("signup.html", { root: "public" })
});


app.get(`/404`, (req, res) => {
    res.sendFile("404.html", { root: "public" })
});

app.use((req, res, next) => {
    res.status(404).sendFile("404.html", { root: "public" });
});

let port = 8080;
app.listen(port, () => {
    console.log(`listening to the port ${port}`);
    
});