const router = require('express').Router()
const PokemonController = require('../controllers/PokemonController.js')

router.get('/',(req,res,next)=>{
    res.json({message:'welcome to pokemon app'})
})

router.get('/pokemons',PokemonController.getAll)


module.exports = router