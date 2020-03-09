const { Pokemon } = require('../models')

class PokemonController {
    static getAll (req,res,next) {
        Pokemon.findAll()
        .then(data=>{
            res.status(200).json({data})
        })
        .catch(next)
    }
}

module.exports = PokemonController