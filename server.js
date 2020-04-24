/** Server con Express y handlebars */ 
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;// To get port env variables from heroku

// Middleware - directorio publico
app.use(express.static( __dirname + '/public'))

/** Rutas a los views */ 
app.get('/', (req, res) => res.redirect('/home'))
app.get('/home', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/face_detection', (req, res) => res.sendFile(__dirname + '/views/face_camera.html'))

/** Run app on port */ 
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`)
})

// Nota: http://localhost:3000/index.html
// Nodemon este pendiente de mas archivos => nodemon server -e js,hbs,html,css


/**Old way */
/*   app.get('/about', function (req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    })
  }) */

  /**Old-Old  Way */
/* app.get('/', function (req, res) {
  // res.send('Hello World')
  let salida = {
    nombre: 'Alejandro',
    edad: 21,
    url: req.url
  }
  res.send(salida)
})

app.get('/data', function (req, res) {
    res.send('Hola data')
}) */
 