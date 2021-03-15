// import { example } from './data.js';
// import data from './data/atletas/atletas.js';

import DATOS from './data/pokemon/pokemon.js';

console.log(DATOS);
// Función que muestra los personajes en Html

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

// muestra.innerHTML = mostrarTodosLosPokemon(DATOS)

const mostrarTodosLosPokemon = (data) => {
    let plantillaPokemon = ''
    data.pokemon.map((obj) => {
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
    return plantillaPokemon;

  };

contenedorTarjetas.innerHTML = mostrarTodosLosPokemon(DATOS)