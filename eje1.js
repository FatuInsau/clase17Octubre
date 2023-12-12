// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

function germinar (plantines) {
    let germinado = '';
    let flor='';
    for(let i=0; i<plantines.length; i++) {
        if(plantines[i]==='P'){
            germinado += flor;
        } else {
            germinado += plantines[i];
            flor = plantines[i];
        }
    }
    return germinado;
}


console.log(germinar('RPGPFPRPGPFP') )// '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
console.log(germinar('RPPPGPPFPPPP')) // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
console.log(germinar('GFPRGPPRRPPP')) // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'