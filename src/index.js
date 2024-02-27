/*
 *  Describe
 */

console.log("Script running.")

const POKE_CONTAINER
const PAGE_SIZE = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#F4E7DA',
	rock: '#D5D5D4',
	fairy: '#FCEAFF',
	poison: '#98D7A5',
	bug: '#F8D5A3',
	dragon: '#97B3E6',
	psychic: '#EAEDA1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
}


const fetchPokemonPage = async (page=0) => {
    for(let i = 1; i <= PAGE_SIZE; i++) {
        await getPokemon((PAGE_SIZE * page) + i);
    }
}

const fetchThatPokemon = async (id) => {
    // GET https://pokeapi.co/api/v2/pokemon/{id or name}/
    
}
