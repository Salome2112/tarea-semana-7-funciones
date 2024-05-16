'use strict'
//Sin parámetros, sin valor de retorno
function saludar(){
    alert("¡Hola, mundo!");
}
saludar()

//Con parámetros, sin valor retorno
function suma(a, b){
    alert("La suma de", a, "y", b, "es:", a + b);
}
suma(5, 3)

//Sin parámetros, con valor retorno
function obtener_numero(){
    return 42
}
numero = obtener_numero()
alert("El número obtenido es:", numero);

//Con parámetros, con retorno
function calcular_promedio(lista){
    suma = sum(lista)
    promedio = suma / len(lista)
    return promedio
}
lista = [4, 6, 8, 10]
promedio = calcular_promedio(lista)
alert("El promedio de la lista es:", promedio)
