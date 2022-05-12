
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()
app.use(cors())

const rutaUsuarios = require('./src/rutas/rutaUsuarios')
const rutaProductos = require('./src/rutas/rutaProductos')

//Conectamos con la base de datos de MongoDB
const db = require('./src/database')
//Detectamos el evento error cuando hay un problema
db.on('error', (error)=>{
    console.log('Error en la conexión de la base de datos' + error);
})
//Detectamos el evento connected cuando todo está ok
db.on('connected', ()=>{
    console.log('La base de datos está conectada !!!');
})

//Middleware par mostrar info de peticiones
app.use(morgan('combined'))

//Middlewares para parsear json
//Middleware para la codificación json del cuerpo de las peticiones (body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas con middleware
app.use('/api/usuarios', rutaUsuarios)
//app.use('/api/productos', rutaProductos)


app.get('/', (req,res)=>{
    res.send('Estás en la ruta raiz de nuestra aplicación')
})
//Levantamos servidor en puerto 6969
app.listen(6969, ()=>{
    console.log('Servidor escuchando en el puerto 6969');
})