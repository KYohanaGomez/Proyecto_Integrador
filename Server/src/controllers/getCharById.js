const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios');


async function getCharById(req, res){
    try {
    const { id } = req.params;   
    const { data } = await axios(`${URL}/${id}`)

    if(!data.name) throw Error(`faltan datos del personaje con ID:${id}`);
   
        const character = {
            id:data.id,
            status:data.status,
            name: data.name,
            species:data.species,
            origin:data.origin,
            image:data.image,
            gender:data.gender
        }   
        return res.status(201).json(character)    
    
    }catch (error) {
        return error.message.includes('ID')
        ? res.status(404).json({message:'not found'})
        :res.status(500).json({error: error.message})    
    }
}
module.exports = {
    getCharById
};



// const  getCharById = (req, res) => {
//     const { id } = req.params;

//     axios(`${URL}/${id}`)
//     .then(response =>response.data)
//     .then(({status, name, species, origin, image, gender}) => {
//         if(name){
//             const character = {
//                 id,
//                 name,
//                 gender,
//                 species,
//                 origin,
//                 image,
//                 status
//             }
//             return res.status(200).json(character)
//         }
//         return res.status(404).send('Not found');
//     })
//     .catch(error => res.status(500).send(error.message))
// }








// const axios = require('axios');
// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status})=>{
//         const character = {
//           id,
//           name,
//           gender,
//           species,
//           origin,
//           image,
//           status
//         }

//         return res.writeHead(200, {'content-type': 'application.json'})
//                   .end(JSON.stringify(character))
//     })
//     .catch(error =>{
//         return res.writeHead(500, {'content-type': 'text/plain'})
//                   .end(error.message)
//     })
// }
// module.exports = {
//     getCharById
// };