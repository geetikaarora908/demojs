var express         =   require('express');
var app             =   express();


app.listen(8888);
console.log('Listening to port 8888');
console.log('Hell world');
app.get('/',function(req,res){
res.send("m fine");
})
