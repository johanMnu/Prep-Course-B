// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
  
   var numeros = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10]
   var acc = 0;

   numeros.forEach(element => {
    acc = acc + element
   })
   return acc ;
 
 
 
 
 

}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

 
}
function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var numeros = [1,4,5,7, 6]
  function elevaAlCuadrado(array){
    return array**2;
  }
  var doble = numeros.map(elevaAlCuadrado)
  return doble;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let numeros = [1, 2, 3, 4, 5, 6, 3 ]
  var suma = numeros.reduce(function sumaArray(acc , elemento){
    return acc + elemento
  })
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var num = [8,5,4,1]
   return num.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
