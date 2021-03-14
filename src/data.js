/* estas funciones son de ejemplo

export const example = () => 'example';

export const anotherExample = () => 'OMG';*/



export const filtraNombre = (datos, string) => {

    const arrayNombre = [...datos];
    const arrayNombreFiltrado = arrayDatos.filter(dato => dato.name
        .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1)

    return arrayNombreFiltrado;
}
