// const app = require('./app')

// // app.listen(3000, () => {
// //     console.log('server on port 3000');
// // });

// async function main() {
// //    await app.listen(3000);
//     await app.listen(app.get('port'));
//     console.log('server on port', app.get('port'));
// }

// main();

const express = require('express');
const fs = require('fs');
const path = require('path'); // Importar el módulo 'path'
const app = express();
const port = 5000;

app.use(express.json());

const router = express.Router();


router.post('/modificar-datos', (req, res) => {
    try {
      const jsonData = fs.readFileSync('src/QA_CONTENT.json', 'utf-8');
      const dataObject = JSON.parse(jsonData);
  
      // Obtén el arreglo de modificaciones que llegan en la solicitud POST
      const modifications = req.body;
  
      // Realiza las modificaciones en el objeto
      modifications.forEach(mod => {
        const { key, value } = mod;
        if (dataObject.hasOwnProperty(key)) {
          dataObject[key] = value;
        }
      });
  
      // Convierte el objeto actualizado a JSON
      const updatedJsonData = JSON.stringify(dataObject, null, 2);
  
      // Escribe el JSON actualizado en el archivo
      fs.writeFileSync('src/QA_CONTENT.json', updatedJsonData, 'utf-8');
  
      res.status(200).json({ message: 'Valores modificados correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error al modificar los datos.' });
    }
});



router.post('/crear-archivo', (req, res) => {
  try {
    const { nombre, contenido } = req.body;

    if (!nombre || !contenido) {
      return res.status(400).json({ mensaje: 'Nombre y contenido son obligatorios.' });
    }

    const directorioDestino = path.join(__dirname,'json'); // Ruta de destino

    if (!fs.existsSync(directorioDestino)) {
      fs.mkdirSync(directorioDestino, { recursive: true });
    }

    const archivoPath = path.join(directorioDestino, `${nombre}.json`);

    fs.writeFile(archivoPath, JSON.stringify(contenido, null, 2), err => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al crear el archivo.' });
      }

      res.status(201).json({ mensaje: 'Archivo creado exitosamente.' });
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
});



app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
