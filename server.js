var express = require('express');
var app = express();

app.use('/css', express.static(__dirname + '/publico/css'));
app.use('/js', express.static(__dirname + '/publico/js'));
app.use('/images', express.static(__dirname + '/publico/images'));

app.get('/',function(request,res){
    res.sendFile(__dirname + '/publico/index.html');
});

app.get('/pagina2.html',function(request,res){
    res.sendFile(__dirname + '/publico/pagina2.html');
});

app.listen(3000, function(){
  console.log('El servidor Esta En llamas!');
});
