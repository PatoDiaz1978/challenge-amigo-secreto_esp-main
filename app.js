// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//creamos una variable para el numero secreto aleatorio
let nombreAmigo = '';

//creamos una variable para guardar un numero de intentos
//let intentos = 0;

//creamos un arreglo con numeros sorteados
//let listaAmigosSecretos = [];

//creamos una variable con el numero maximo
//let numeroMaximo=10;

function agregarAmigo() {

    //traigo el dato ingresado
    let nombreAmigo = (document.getElementById('amigo').value);

    //muestro en consola
    console.log(nombreAmigo);

    //if (nombreAmigo > 0) {
        

        //llamo a funcion para agregar dato al arreglo
        agregarAmigoSecreto();

        limpiarCaja();

        //muestra arreglo con nombres
        //mostrarAmigosSeparadamente()


    //    } else {
            //console.log(nombreAmigo);
            //alert('Ingrese un nombre');
    //      }
}

    //console.log(typeof(nombreAmigo));
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario === nombreAmigo)
    //console.log(intentos)
    
    //el usuario acerto
    //if (nombreAmigo > '') {
        //alert(`Acertaste, el numero secreto es: ${numeroUsuario}. Acertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        //asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);

        //si acierta, se habilita boton para reiniciar juego
        //document.getElementById('reiniciar').removeAttribute('disabled');

      //  } else {
            //el usuario no acerto
      //  if (numeroDeUsuario > numeroSecreto) {
      //      asignarTextoElemento('p','El número secreto es menor');
      //  } else {
 //           asignarTextoElemento('p','El número secreto es mayor');
      //  }
      //  intentos++;
      //  limpiarCaja();
    //}
//}

//se crea una funcion para limpiar texto ingresado
function limpiarCaja(){

    //limpiar la caja
    document.querySelector('#amigo').value='';
}

//se crea una funcion para generar un numero secreto aleatorio
function agregarAmigoSecreto() {

    //si el nombre ingresado esta incluido en la lista
    if (listaAmigosSecretos.includes(nombreAmigo)) {
            
            //devuelve el valor generado ya existente
            //return generarNumeroSecreto();
            alert ('Ya se ingreso este nombre');
            //break(); 

        } else {
            //sino existe se agrega en la ultima posicion del arreglo
            listaAmigosSecretos.push(nombreAmigo);
            
            //mostrarAmigosSeparadamente()

            //devuelve el numero sorteado
            //return numeroGenerado;
        }

}



//Crea una función que muestre en la consola todos los nombres
//function mostrarAmigosSeparadamente() {
//    listaAmigosSecretos = ''
//    for (let i = 0; i < listaAmigosSecretos.length; i++) {
//    console.log(listaAmigosSecretos[i]);
//  }
//}

//mas o menos creo qu esto puede resolver tu codigo 
let listaAmigosSecretos = []
function mostrarAmigosSeparadamente(list) {
    for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

mostrarAmigosSeparadamente(listaAmigosSecretos) 


