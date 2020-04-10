var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var _ = require("lodash");
const text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const text2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
const text3 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
var posts = [];
var text4 = "";
var app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',express.static(__dirname));
app.use('/',express.static(__dirname + "/views"));

app.get("/",function(req, res){
    res.render("home",{text:text1,posts:posts});
})

app.get("/contact",function(req, res){
    res.render("contact",{text:text2})
})

app.get("/about",function(req, res){
    res.render("about",{text:text3})
})

app.get("/compose",function(req,res){
    res.render("compose");
})

app.post("/compose",function(req,res){
     inputs = {
        title: req.body.title,
        textContent: req.body.textarea
    }
    
    posts.push(inputs);
    res.redirect("/")
    
})

app.get("/posts/:postname",function(req, res){
    const requestedtitle = _.lowerCase(req.params.postname);

    for(var i = 0 ; i<posts.length ; i++){
        const storedtitle = _.lowerCase(inputs.title);

        if(storedtitle === requestedtitle)
        {
            res.render("post",{text: inputs.textContent, title: inputs.title});
        }
    
    }
})

app.get("/login",function(req, res){
    res.render("login")
})

app.post("/login",function(req,res){
    var email= req.body.email;
    console.log(email);
})

app.listen(3000,function(){
    console.log("server started");
})