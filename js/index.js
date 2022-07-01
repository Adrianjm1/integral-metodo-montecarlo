

//Definimos los valores
// a y b son los limites de la integral
const a = 2;
const b = 3;

//Resolvemos integral propuesta por el metodo normal
const integral =   (Math.pow(b,3) +  Math.pow(b,2)) - ((Math.pow(a,3) +  Math.pow(a,2)))

//M es la cota superior
const m = 30;



// n, numero de simulaciones
let n = 1000;


let punto =0;

for (let i = 0; i < n; i++) {
    
    //Calculando X y Y
    let x = a + (Math.random()) * (b-a);
    let y = (Math.random()) * m
    let resultx = 3 * Math.pow(x,2) + 2 * x;



    if (y <= resultx) {
        punto++;
    }
    
}


let monteCarlo = (punto/n) * (b-a) * m ;
let error = Math.abs(((integral - monteCarlo)/integral).toFixed(8));

console.log('Integral propuesta: ' + integral +'\n' + 'Integral calculada: ' + monteCarlo + '\n' + 'Error: ' + error);



