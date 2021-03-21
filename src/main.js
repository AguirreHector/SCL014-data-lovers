import DATOS from './data/pokemon/pokemon.js';
import { mostrarTodosLosPokemon, } from './data.js';

console.log(DATOS);

const todosLosPokemon = DATOS.pokemon;

// muestra pokemons que cumplen con las condiciones establecidas de búsqueda.
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(todosLosPokemon)


//filtra por nombre.
document.querySelector('#inputNombre').addEventListener('keyup', buscadorPokemon);

function buscadorPokemon() {
    const buscaPokemons = document.getElementById('inputNombre').value.toLowerCase();
    const buscaPokemon = todosLosPokemon.filter(pokemon => pokemon.name.includes(buscaPokemons));
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaPokemon);
}

