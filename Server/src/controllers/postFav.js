const { Favorite } = require('../DB_connection');

async function postFav(req, res) {
    try {
        console.log(req.body)
        const { name, status, image, species, gender, origin } = req.body;
        const id = req.body.id.toString();
        if (!id || !name || !origin || !status || !species || !gender) res.status(401).json("Faltan datos");
        else {
            const [character, created] = await Favorite.findOrCreate({
                where: { id: id },
                defaults: {
                    name: name,
                    origin: origin,
                    status: status,
                    image: image,
                    species: species,
                    gender: gender
                }
            });
            const findCharacter = await Favorite.findAll();
            res.json(findCharacter);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = postFav;







// const { Favorite } = require('../DB_connection')

//  const postFav = async (req, res) => {
//     const { id, name, origin, status, image, species, gender } = req.body;


// if(![id, name, origin, status, image, species, gender].
//     every(Boolean)) return res.status(401).json({error:'Faltan Datos'})


//     try {
//         await Favorite.findOrCreate({
//             where:{id, name, origin, status, image, species, gender

//         }})
//         const allfavs = await Favorite.findAll()

//         return res.status(200).json(allfavs) 

//     } catch (error) {
//        res.status(500).json({error:error.message}) 
//     }
//  }

//  module.exports = postFav;