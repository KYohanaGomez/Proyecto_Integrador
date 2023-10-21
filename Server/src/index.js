const server = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
});



// server.listen(PORT, "localhost", ()=>{
//         console.log(`Servidor corriendo en el puerto ${PORT}`)
//     });



// const http = require('http');
// const PORT = 3001;
// const { getCharById } = require('./controllers/getCharById')



// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1);

//         getCharById(res, +id);
//     }

   

// }).listen(PORT, "localhost", ()=>{
//     console.log(`Servidor corriendo en el puerto ${PORT}`)
// });