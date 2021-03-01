const express=require("express");
const request=require("request");
const bodyparser=require("body-parser");
const https=require("https");
const ejs = require("ejs");
const url="https://api.wazirx.com/api/v2/tickers";
const app=express();


app.use(express.static("public"));//to refer static files like css
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');






app.get("/",function(req,res){

  https.get(url,function(response){

  var buffers = []

 response
   .on('data', function(chunk) {
     buffers.push(chunk);

   })
   .on('end', function() {
    const  apidata=JSON.parse(Buffer.concat(buffers).toString());
    //  Object.keys(apidata).forEach(function(key) {
    // console.log(apidata[key].name);
res.render("home",{apid:buffers});

  })

     // ...
 });



});









app.listen( 3000,function(){
  console.log("Server is running on port 3000");
});
