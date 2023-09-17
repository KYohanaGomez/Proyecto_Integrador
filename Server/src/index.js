const http = require('http');
const data = require('./utils/data.js');
const PORT = 3001;



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1)

        const characterFind = data.find((character) => character.id === Number(id))

    return res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(characterFind))

    }

}).listen(PORT, "localhost", ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});