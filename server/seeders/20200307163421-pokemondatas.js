'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokemons', 
      [
        {"national_number":"001","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif","name":"Bulbasaur","hp":45,"attack":49,"defense":49,"speed":45, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"002","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif","name":"Ivysaur","hp":60,"attack":62,"defense":63,"speed":60, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"003","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif","name":"Venusaur","hp":80,"attack":100,"defense":123,"speed":80, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"004","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif","name":"Charmander","hp":39,"attack":52,"defense":43,"speed":65, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"005","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif","name":"Charmeleon","hp":58,"attack":64,"defense":58,"speed":80, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"006","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif","name":"Charizard","hp":78,"attack":130,"defense":111,"speed":100, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"007","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif","name":"Squirtle","hp":44,"attack":48,"defense":65,"speed":43, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"008","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif","name":"Wartortle","hp":59,"attack":63,"defense":80,"speed":58, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"009","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif","name":"Blastoise","hp":79,"attack":103,"defense":120,"speed":78, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"010","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif","name":"Caterpie","hp":45,"attack":30,"defense":35,"speed":45, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"011","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif","name":"Metapod","hp":50,"attack":20,"defense":55,"speed":30, "createdAt": new Date(), "updatedAt": new Date()},
        {"national_number":"012","evolution":null,"animated":"https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif","name":"Butterfree","hp":60,"attack":45,"defense":50,"speed":70, "createdAt": new Date(), "updatedAt": new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Pokemons', null, {});
  }
};
