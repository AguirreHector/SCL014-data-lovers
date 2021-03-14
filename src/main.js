// import { example } from './data.js';
// import data from './data/atletas/atletas.js';

import DATOS from './data/pokemon/pokemon.js';

console.log(DATOS);
// Función que muestra los personajes en Html

const mostrarTodosLosPokemon = (data) => {
    let plantillaPokemon = '';
    data.forEach((obj) => {
        plantillaPokemon += `
        <div class="tarjeta">
            <div class="contendorTarjeta">
                <img src = '${obj.image}' alt = "Image" class="imagenPokemon"/>
                <h2 class="nombrePokemon">${obj.name}</h2>
                <li>Tipo: ${obj.type}</li>
                <li>Fuerte contra: ${obj.resistant}</li>
                <li>Débil contra: ${obj.weaknesses}</li>
            </div>
        </div>`;
    });
    return plantillaPokemon;
  };

const muestra = document.getElementById('muestra')
muestra.textContent = mostrarTodosLosPokemon(DATOS)