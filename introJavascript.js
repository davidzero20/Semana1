var costoProducto = 50
var descuentoProducto = 0.2
const ISV = 0.15
var otros = 10

var total = 
    costoProducto - 
    (costoProducto*descuentoProducto) + 
    (costoProducto*ISV) + 
    otros 

    console.log("El total a pagar es: " +total)

    var totalDisponible = 100;

    function obtenerDisponibleInventario(cantRequerida){
    let cantAEntregar
    console.log(`Cantidad Inicial : ` +totalDisponible)
    if(totalDisponible>cantRequerida){
        cantAEntregar = cantRequerida 
       totalDisponible -= cantRequerida
    }else{
        cantAEntregar= totalDisponible
        totalDisponible = 0
    }
    console.log(`Cantidad Inicial: `+totalDisponible)
    console.log(`Cantidad a entregar: ${cantAEntregar}`)
    console.log(`Pedido pendiente a bodega: ${cantRequerida-cantAEntregar}`)
 }
 obtenerDisponibleInventario(120)
 console.log(totalDisponible)



//ESTRUCTURA DE DECISION TERNARIA
 /*let decision = (5>4)?1:0
 console.log(decision)*/

//ESTRUCTURA DE TIPO FLECHA
 /*(cantRequerida) =>{
     console.log("Hola")
 }*/


//DEFINIR VARIABLES
//var,let,const

