/**
 * break;
 * es una estrucutra repetitiva, sirve para detenet el ciclo y saltarse todos los ciclos o iteraciones que
 * quedaban por dar
 * -romper y finalizar un ciclo
 */

let nombres=["jorge","samanta","dayana","dennis","brunela"]

/**
 * indicar o imprimir, la posicion en el que "denis" se encuentra
 * asumir que no se repitan los nombres
 */
let i=0;

 for(let i=0; i<nombres.length; i++){
     if(nombres [i]==="dennis"){
         console.log(i)
         break;


     }
 }
 console.log(nombres)
 console.log(i)

 /**
  * continue; sirve para saltarse la iteración en la que se encuentra es decir, todo el código que
  * quedaba por ejecutarse en una determinada iteraciónm se va a omitir, y se parará
  * a la siguiente iteración
  */

  let numerosBinarios=[1,0,1,0,1,0,1,0,0,0,0,0,0]

  /**
   * del arreglo numerosBinarios, imprimir solamente los 0(ceros)
   */

   for(let i=0; i<numerosBinarios.length; i++){
       if(numerosBinarios[i]===1){
           continue;
       }
       console.log(numerosBinarios[i]);
   }



   /**
 * Algebra  de bool
 */
let edad=20;
let cazado=true;
/**
 * la persona ingresa all establecimiento
 * si es mayor deedad y no tiene novia
 */
if(edad>=18){
    if(cazado === false){
        console.log("pase joven");
    }
}

//usand operadores logicos

if(edad >= 18 && cazado !==true){
    console.log("pase joven")

}else{
    console.log("no admitido")
}
/**
 * Calcular si un año ingresado es bisiesto
 *
 * Teoría.
 * Los años bisiestos son divisibles entre 4 pero NO entre 100
 * Por otro lado, si son divisibles entre 400 también son bisiestos
 */
let anio = 1991;
if ((anio % 400 === 0) || ((anio % 4 ===0) && (anio % 100 !==0))) {
  console.log("SI ES BISIESTO");
} else {
  console.log("no es bisisesto")
}


/**
 * las funciones son porciones de código que se pueden ejecutar
 * en cualquier punto del programa y varias veces si fuera
 * necesario
 */

 //la funcion solo esta declarada no invocada
 function imprimirMayor(arreglo=[],nombre=""){
    let mayor =0;
    for(let i=0; i < arreglo.length; i++){
        if(arreglo[i] > mayor){
            mayor = arreglo[i]; 

        }
  }  
  if(nombre === "" || arreglo.length ===0){
      console.error(" no se a enviado los parametros a la funcion");

  }else{
      console.log(`la mayor de las ${nombre} es ${mayor}`);
  }
 }

 
 let notas =[10,15,12,05,20,11.5]
 let edades=[12,50,20,60,58];
 let facturas=[100,520,851,12];

//  a continuación llamamos o invocamos a la function

 imprimirMayor(edades, "Edades");
 imprimirMayor(notas, "Notas");
 imprimirMayor(facturas);
 imprimirMayor();

 /**
 * el operador ternario sirve para resumir un if-else
 * como requisito, tanto el if como el else, deben tener
 * una solo línea de código interno
 */
let dcto=0;
let productos=[12.5,13.0,80.00,800,900];
let total=0;
/**
 * si es total de mayor a S/  500 hacer el descuento del 5%
 */


 for(let i=0;i<productos.length;i++){
   total +=productos[i];
   

 }

 /**
  * Sí el total a pagar es mayor a S/. 500 hacer el descuento
  * de 5%
*/

if(total>500){
    dcto=total*0.05
}else{
    dcto=total*0.01
}

dcto = total<500 ? total *0.05 : total *0.01;


let  numero1=3847;
let numero2=3434;

let max= numero1 > numero2 ? numero1:numero2;
console.log(max)


/**
 * haciendo un sole log, sin usar la igualdad
 * forma 1
 */
numero1 > numero2 ? console.log(numero1) : console.log(numero2);
//forma 2
console.log(numero1 > numero2 ? numero1:numero2);

//fomra 3
console.log(numero1 > numero2);

