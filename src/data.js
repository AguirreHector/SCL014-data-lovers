/* estas funciones son de ejemplo

export const example = () => 'example';


export const anotherExample = () => 'OMG';*/
import DATOS from './data/pokemon/pokemon.js';
// import { llamador } from './main.js';

// Función exportada que muestra pokemons.

// muestra pokemons que cumplen con las condiciones establecidas de búsqueda.

console.log(DATOS);

const todosLosPokemon = DATOS.pokemon;
const contenedorTarjetas = document.getElementById('contenedorTarjetas')


export let mostrarTodosLosPokemon = (data) => {
    let plantillaPokemon = ''
    data.map((obj) => {
        plantillaPokemon += `
        <div class="tarjetaPokemon">
                <div class="internoTarjeta">
                    <img src='${obj.img}' alt = "Image" class="imagenPokemon"/>
                    <h2 class="nombrePokemon">${obj.name.toUpperCase()}</h2>
                </div>
                <div class="infoPokemon">
                    <li><b>TYPE:</b> ${obj.type.map(item => " "+item.toUpperCase())}</li>
                    <li><b>RESISTANT:</b> ${obj.resistant.map(item => " "+item.toUpperCase())}</li>
                    <li><b>WEAKNESSES:</b> ${obj.weaknesses.map(item => " "+item.toUpperCase())}</li>
                </div>
            </div>
            `;
        });
//        console.log(data);             //IMPORTANTE para mostrar en consola que es lo que se está mostrando.
        return plantillaPokemon;
    }

contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(todosLosPokemon)

//filtra por NOMBRE.
export function buscadorPokemon(cambiante) {
    const buscaPokemons = document.getElementById('inputNombre').value.toLowerCase();
    if(buscaPokemons===''){
        contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(cambiante);
    } else {
        const buscaPokemon = cambiante.filter(pokemon => pokemon.name.includes(buscaPokemons));
    cambiante = buscaPokemon;
    contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaPokemon);
    }
    return cambiante;
}

//filtra por EVOLUCIONES
let checkSi = document.getElementById("checkboxSi");
let checkNo = document.getElementById("checkboxNo");
let checkeadoSi = checkSi.checked;
let checkeadoNo = checkNo.checked;
let arregloCheckeados = [checkeadoSi, checkeadoNo]



export const encuentraEvo = (cambiante) => {

    let resultado = [];
    
    if(arregloCheckeados[0]==true&&arregloCheckeados[1]==false){
        for(let pokemon of cambiante){
            let tendraEvo = pokemon.evolution["next-evolution"];
            if(tendraEvo != undefined){
                resultado.push(pokemon);
            }
        }
    } else if(arregloCheckeados[0]==false&&arregloCheckeados[1]==true){
        for(let pokemon of cambiante){
            let tendraEvo = pokemon.evolution["next-evolution"];
            if(tendraEvo == undefined){
                resultado.push(pokemon);
            }
        }
    } else {
        resultado = cambiante;
    }
    cambiante = resultado;
   contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(cambiante);
    return cambiante;
}

// cambia arreglo false/true para filtrar evoluciones
export function funcionCheckSi() {
    if(checkeadoSi == false) {
        checkeadoSi = true;
    } else {
        checkeadoSi = false;
    };
    arregloCheckeados[0] = checkeadoSi;
    //console.log(arregloCheckeados);
    llamador();
};

export function funcionCheckNo() {
    if(checkeadoNo == false) {
        checkeadoNo = true;
    } else {
        checkeadoNo = false;
    };
    arregloCheckeados[1] = checkeadoNo;
    //console.log(arregloCheckeados);
    llamador();
};


//filtra por TIPO.
export function buscadorTipos(cambiante) {
    const tomaTipos = document.getElementById('tipo').value.toLowerCase();
    if(tomaTipos===''){
       contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(cambiante);
    } else {
        if(cambiante.filter(pokemon => pokemon.type.includes(tomaTipos)).length!== 0){
            const buscaTipos = cambiante.filter(pokemon => pokemon.type.includes(tomaTipos));
            cambiante = buscaTipos;
            contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaTipos);
        }
    }
    return cambiante;
}


//filtra por FORTALEZAS
export function buscadorFortalezas(cambiante) {
    const tomaFortalezas = document.getElementById('fortaleza').value.toLowerCase();
    if(tomaFortalezas===''){
       contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(cambiante);
    } else {
        if(cambiante.filter(pokemon => pokemon.resistant.includes(tomaFortalezas)).length !== 0){
            const buscaFortalezas = cambiante.filter(pokemon => pokemon.resistant.includes(tomaFortalezas));
            cambiante = buscaFortalezas;
           contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaFortalezas);
        }
    }
    return cambiante;
}


//filtra por DEBILIDADES
export function buscadorDebilidades(cambiante) {
    const tomaDebilidades = document.getElementById('debilidad').value.toLowerCase();
    if(tomaDebilidades===''){
        contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(cambiante);
    } else {
        if(cambiante.filter(pokemon => pokemon.weaknesses.includes(tomaDebilidades)).length !== 0){
            const buscaDebilidades = cambiante.filter(pokemon => pokemon.weaknesses.includes(tomaDebilidades));
            cambiante = buscaDebilidades;
            contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(buscaDebilidades);
        }
    }
    return cambiante;
}

export const llamador = () => {
    let cambiante = todosLosPokemon;
    cambiante = buscadorPokemon(cambiante)
    cambiante = encuentraEvo(cambiante)
    cambiante = buscadorTipos(cambiante)
    cambiante = buscadorFortalezas(cambiante)
    cambiante = buscadorDebilidades(cambiante)
    mostrarTodosLosPokemon(cambiante)
}

document.querySelector('#inputNombre').addEventListener('keyup', llamador);
document.querySelector('#tipo').addEventListener('keyup', llamador);
document.querySelector('#checkboxSi').addEventListener('change', funcionCheckSi);
document.querySelector('#checkboxNo').addEventListener('change', funcionCheckNo);
document.querySelector('#fortaleza').addEventListener('keyup', llamador);
document.querySelector('#debilidad').addEventListener('keyup', llamador);
