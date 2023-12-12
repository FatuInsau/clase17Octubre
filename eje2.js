// comer(plantas)
// Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

function comer(plantas) {
    let resultado ='';
    let conejo;
    let señal;
    for(let i=0; i<plantas.length; i++){
        if(plantas[i]==='C'){
            conejo = i;
        }
        if(plantas[i]==='S'){
            señal=i;
        }
        if(conejo===undefined){
            resultado+= plantas[i];
        } 
        if(i>señal && señal){
            resultado +=plantas[i]
        }
    }
    return resultado;
}

console.log(comer('CZAZS') )// ''
console.log(comer('ZACZZZS')) // '🥕🥬'
console.log(comer('CZAZSZ')) // '🥕'
console.log(comer('PZPCPAPPSF')) // '🌱🥕🌱🌷'
// C --> conejo
// S --> señal de prohibido