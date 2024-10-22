const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Daniel J. Castellanos S.</h1>');
});
//Recibiendo los datos por parametros
//ejemplo
//http://localhost:3000/admin/:Daniel/:Castellanos
app.get('/admin/:nombre/:apellido', (req, res) => {
  const { nombre, apellido } = req.params;
  res.json({
    nombre: nombre,
    apellido: apellido
  });
});
//mostrando los datos del json
//ejemplo
//http://localhost:3000/admin
app.get('/admin', (req, res) => {
    res.json({
      nombre: 'Daniel Josue',
      apellido: 'Castellanos'
    });
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
