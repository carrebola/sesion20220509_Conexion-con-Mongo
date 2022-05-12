//Import the mongoose module
const mongoose = require('mongoose');

//Codigo de conexion con la base de datos mongodb

const BD_NAME = 'bd_productos'
const BD_USER = 'carlos_soc_fpllefia' 
const BD_PASSWORD = 'fpllefia_soc_carlos'

//uri de nuestra base de datos mongodb
const uri = `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.w1e6t.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`

//Creamos conexión
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//exportamos la conexión
module.exports = db


//----------------------------------------------------------











