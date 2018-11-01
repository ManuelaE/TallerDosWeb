const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'tienda';

const client = new MongoClient(url);
var db = null;

client.connect(function(err){
  if(err){
    console.error(err);
    return;
  }

  db = client.db(dbName);
});

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

 
/////Rutas/////

//Activar Taller uno
/*app.get('/', function(request, response){
  response.render("talleruno");
});*/

//Tienda general
app.get('/tiendageneral', function (request, response) {
  const col = db.collection('productos');
  col.find({}).toArray(function(err, docs){
    if(err){
      console.error(err);
      response.send(err);
      return;
    }
    
    var contexto = {
      productos: docs,
      titulo: request.query.mascota
    };

    response.render('main', contexto);
  });
});

//Tienda según el accesorio de la mascota
app.get('/tienda', function(request, response){

  const col = db.collection('productos');
  //console.log(request.query.mascota.toString()+"oooooooo");
  col.find({
    mas: {
      '$eq': request.query.mascota
    }
  }).toArray(function(err, docs){

    if(err){
      console.error(err);
      response.send(err);
      return;
    } 

    var list = [];
    list = accesorios(list, request.query.mascota.toString());

    var contexto = {
      productos: docs,
      lista: list ,
      titulo: request.query.mascota
    };

    response.render("main", contexto);

  });
  
});

app.get('/tiendafiltro2', function (request, response) {

  const col = db.collection('productos');
  console.log(request.query.mascota);
  console.log(request.query.tipo);

  col.find({
    mas: {
      '$eq': request.query.mascota
    }, 
    filtro: {
      '$eq': request.query.tipo
    }
  }).toArray(function(err, docs){

    if(err){
      console.error(err);
      response.send(err);
      return;
    } 

    var list = [];
    list = accesorios(list, request.query.mascota.toString());
    
    var contexto = {
      productos: docs,
      lista: list,
      titulo: request.query.mascota,
      accesorio: request.query.tipo.toString()
    }

    response.render('main', contexto);

  });

});

//filtro 3 cololes
app.get('/tiendafiltro3', function (request, response) {

  const col = db.collection('productos');
  console.log(request.query.mascota);
  console.log(request.query.color);

  col.find({
    mas: {
      '$eq': request.query.mascota
    }, 
    color: {
      '$eq': request.query.color
    }
  }).toArray(function(err, docs){

    if(err){
      console.error(err);
      response.send(err);
      return;
    } 

    var list = [];
    list = accesorios(list, request.query.mascota.toString());
    
    var contexto = {
      productos: docs,
      lista: list,
      titulo: request.query.mascota,
      accesorio: request.query.color.toString()
    }

    response.render('main', contexto);

  });

});

app.get('/descrip', function (request, response) {
  
  const col = db.collection('productos');

  col.find({
    titulo: {
      '$eq': request.query.who
    }
  }).toArray(function(err, docs){

    if(err){
      console.error(err);
      response.send(err);
      return;
    } 

    var contexto = {
      productos: docs,
      titulo: request.query.who,
    }

    response.render('descri', contexto);

  });
});

function accesorios (elem, variable){
  switch(variable){
    case 'perro':
    elem = [
      'collares',
      'correa',
      'camas',
      'ropa',
      'arnés',
      'bocados'
    ]
    return elem;
    break;

    case 'gato':
    elem = [
      'camas',
      'ropa',
      'bocados'
    ]
    return elem;
    break;
  }
};

app.listen(5500, function(){
  console.log('el servidor está escuchando en el puerto 5500');
});