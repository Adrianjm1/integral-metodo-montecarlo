



const simular = () => {


 //Definimos los valores
// a y b son los limites de la integral
const a = parseInt(document.getElementById("limitea").value)  ;
const b = parseInt(document.getElementById("limiteb").value) ;



//Resolvemos integral propuesta por el metodo normal
const integral =   (Math.pow(b,3) +  Math.pow(b,2)) - ((Math.pow(a,3) +  Math.pow(a,2)))

//M es la cota superior
const m = parseInt(document.getElementById("cotas").value) ;



// n, numero de simulaciones
let n = parseInt(document.getElementById("numeroDeSimulaciones").value)  ;

let punto =0;



    for (let i = 0; i < n; i++) {
        
        //Calculando X y Y
        let x = a + (Math.random()) * (b-a);
        let y = (Math.random()) * m
        let resultx = 3 * Math.pow(x,2) + 2 * x;
        let err = Math.abs(((integral - resultx)/integral).toFixed(5));
    
        document.getElementById("results").insertRow(-1).innerHTML = `<tr ><th scope="row">${i+1}</th><td >${y.toFixed(4)}</td> <td >${resultx.toFixed(4)}</td> <td >${err.toFixed(4)}</td>  <td style="color:${y <= resultx ? `green`: `red`} ; font-weight:bold">${y <= resultx ? 'Exito': 'Fracaso'}</td></tr>`
        if (y <= resultx) {
            punto++;
        }
        
    }
    
    
    let monteCarlo = (punto/n) * (b-a) * m ;
    let error = Math.abs(((integral - monteCarlo)/integral).toFixed(8));

    document.getElementById("integral").value = integral;
    document.getElementById("monte").value = monteCarlo.toFixed(4);
    document.getElementById("error").value = error.toFixed(4);
    document.getElementById("exito").value = punto;
    document.getElementById("fracaso").value = n- punto;
    document.getElementById("todosLosResultados").style = "display:block";

    
    
    console.log('Integral propuesta: ' + integral +'\n' + 'Integral calculada: ' + monteCarlo + '\n' + 'Error: ' + error);
    

}    



