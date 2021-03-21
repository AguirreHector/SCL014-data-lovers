/* estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';*/


// Función exportada que muestra pokemons.
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
    console.log(data);
    return plantillaPokemon;
}
