import DATOS from './data/pokemon/pokemon.js';
import { mostrarTodosLosPokemon, } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

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


//filtra por EVOLUCIONES
let checkSi = document.getElementById("checkboxSi");
let checkNo = document.getElementById("checkboxNo");
let checkeadoSi = checkSi.checked;
let checkeadoNo = checkNo.checked;
let arregloCheckeados = [checkeadoSi, checkeadoNo]

const encuentraEvo = (todosLosPokemon) => {

    let resultado = [];
    
    if(arregloCheckeados[0]==true&&arregloCheckeados[1]==false){
        for(let pokemon of todosLosPokemon){
            let tendraEvo = pokemon.evolution["next-evolution"];
            if(tendraEvo != undefined){
                resultado.push(pokemon);
            }
        }
    } else if(arregloCheckeados[0]==false&&arregloCheckeados[1]==true){
        for(let pokemon of todosLosPokemon){
            let tendraEvo = pokemon.evolution["next-evolution"];
            if(tendraEvo == undefined){
                resultado.push(pokemon);
            }
        }
    } else {
        resultado = todosLosPokemon;
    }
    return resultado;
}

checkSi.addEventListener('change', function() {
    if(checkeadoSi == false) {
        checkeadoSi = true;
    } else {
        checkeadoSi = false;
    };
    arregloCheckeados[0] = checkeadoSi;
    console.log(arregloCheckeados);

    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(encuentraEvo(todosLosPokemon));
});

checkNo.addEventListener('change', function() {
    if(checkeadoNo == false) {
        checkeadoNo = true;
    } else {
        checkeadoNo = false;
    };
    arregloCheckeados[1] = checkeadoNo;
    console.log(arregloCheckeados);
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(encuentraEvo(todosLosPokemon));
});



//filtra por TIPO.
document.querySelector('#tipo').addEventListener('keyup', buscadorTipos);

function buscadorTipos() {
    const tomaTipos = document.getElementById('tipo').value.toLowerCase();
    const buscaTipos = todosLosPokemon.filter(pokemon => pokemon.type.includes(tomaTipos));
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaTipos);

}



//filtra por FORTALEZAS.
document.querySelector('#fortaleza').addEventListener('keyup', buscadorFortalezas);

function buscadorFortalezas() {
    const tomaFortalezas = document.getElementById('fortaleza').value.toLowerCase();
    const buscaFortaleza = todosLosPokemon.filter(pokemon => pokemon.resistant.includes(tomaFortalezas));
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaFortaleza);
}



//filtra por DEBILIDADES.
document.querySelector('#debilidad').addEventListener('keyup', buscadorDebilidades);

function buscadorDebilidades() {
    const tomaDebilidades = document.getElementById('debilidad').value.toLowerCase();
    const buscaDebilidades = todosLosPokemon.filter(pokemon => pokemon.weaknesses.includes(tomaDebilidades));
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaDebilidades);
}