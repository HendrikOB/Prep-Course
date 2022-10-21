// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  //return array[array.length-1];
  return array.at(-1)
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0 ; i < array.length; i++){
    array[i] = array[i] + 1
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array; 
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //let suma = 0;
  let suma = numeros.reduce(function(a,b){return a+b});
  /*for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
  }*/

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  //let promedio = resultadosTest.reduce(function(a,b){return a+b}) / resultadosTest.length;
  for (let i = 0; i < resultadosTest.length; i++){
    promedio += resultadosTest[i];
  }
  //return promedio;
  return promedio/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = 0;
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i]> masGrande){
      masGrande = numeros[i];
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = 1;
  if(arguments.length === 0){
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++){
      producto = producto * arguments[i];  
    }
  }

  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let count = arreglo.map(i => i > 18 ? i : "").filter(Boolean);
  return count.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia == 1 || numeroDeDia == 7){
    return 'Es fin de semana';
  } else {
    return 'Es dia Laboral';
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let ntoString = n.toString();
  let findFS = Array.from(ntoString[0])
  //let ntoNumber = Number(findFS);
  //return ntoNumber;
  if (findFS == '9') {
      return true;
  } else {
      return false;
  }
  /*if ((n.toString()).charAt(0) === '9') {
    return true;
  } else {
    return false;
  }*/

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  
  /*return new Set(arreglo).size === 1;
  //Esta solucion es simplemente brillante, el objeto SET solo te permite incluir un unico valor de cualquier tipo, entonces si un array tiene el valor 'x' repedito 'n' veces; en el objeto SET solo se guardara un unico valor console.log(mySet) output ---> [x] => Set(arreglo).size = 1.*/
  
  for(i =0 ; i < arreglo.length; i++){
    if(arreglo[i] !== arreglo[i+1]){
      return false;
    }else {
      return true;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  /*if(array.indexOf('Marzo') > -1 && array.indexOf('Enero') > -1 && array.indexOf('Noviembre') > -1) {
      return array = ['Marzo', 'Noviembre', 'Enero'];
  }else{
      return 'No se encontraron los meses pedidos';
  }*/
  let nArray = []
  for(let i = 0; i< array.length ; i++){
        
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
            
    nArray.push(array[i]);
    }
  }
  if(nArray.length < 3){
    return 'No se encontraron los meses pedidos'
  }
  return nArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nNumber = [];
    for (let i=0; i< array.length; i++){
      if(array[i]>100){
          nNumber.push(array[i])
      }
    }
    return nNumber;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArray = [];
  let suma = numero;

  for(var i=0 ; i<10 ; i++){
        
    suma = suma +2;
    if(suma === i) break
    else newArray.push(suma)      
    }

    if(i<10) {
      return 'Se interrumpió la ejecución'
    }else {
      return newArray;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let newArray = [];
  let suma = numero;

  for(var i=0 ; i<10 ; i++){
    if (i===5) continue
    suma = suma +2;
    newArray.push(suma)      
  }

    return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
