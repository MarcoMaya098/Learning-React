const { Router } = require('express');
const router = Router();
const fs = require('fs');
const uuid = require('uuid');

// const books = []; 
const readjson_books = fs.readFileSync('src/books.json', 'utf-8');
let books = JSON.parse(readjson_books);

router.get('/', (req, res) => {
    res.render('index.ejs', {
        books
    });
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});

router.post('/new-entry', (req, res) => {
   // console.log(req.body);
    const { title, description, image, author } = req.body;
    if(!title || !author  || !image || !description ){
        res.status(400).send('Entries must have a title and description');
        return;
    }

    let newBook = {
        id: uuid.v4(),
        title,
        author,
        image,
        description
    }
    books.push(newBook);
    console.log(books);
    const json_books = JSON.stringify(books);
    fs.writeFileSync('src/books.json', json_books, 'utf-8');  
 
    res.send('Received')
    res.redirect('/');
});

router.get('/delete/:id', function(req, res) {
    // console.log(req.params)
    // res.send('Received')

    books =  books.filter(book => book.id !== req.params.id)
    const json_books = JSON.stringify(books);
    fs.writeFileSync('src/books.json', json_books, 'utf-8');  
    res.redirect('/');

});


router.post('/modificaDatos', (req, res) => {
    try {
        const jsonData = fs.readFileSync('src/QA_CONTENT.json', 'utf-8');

        const dataObject = JSON.parse(jsonData);
        console.log(req.body.toString());
        // Obtén los datos que llegan en la solicitud POST
        const { key, value } = req.body;
        console.log(key, value);

        // Verifica si la clave existe en el objeto antes de modificarla
        // Modifica el valor de la clave
        dataObject[key] = value;

        // Convierte el objeto actualizado a JSON
        const updatedJsonData = JSON.stringify(dataObject, null, 2);

        // Escribe el JSON actualizado en el archivo
        fs.writeFileSync(filePath, updatedJsonData, 'utf-8');

        res.status(200).json({ message: 'Valor modificado correctamente.' });
       
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al modificar los datos.' });
    }
});





module.exports = router;