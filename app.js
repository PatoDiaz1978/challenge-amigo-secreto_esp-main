// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//creamos una variable para el numero secreto aleatorio
let nombreAmigo = '';

 function agregarAmigo() {

    //traigo el dato ingresado
    let nombreAmigo = (document.getElementById('amigo').value);

    //muestro en consola
    console.log(nombreAmigo);

        //llamo a funcion para agregar dato al arreglo
        agregarAmigoSecreto();

        //limpio el texto
        limpiarCaja();
}

 //se crea una funcion para generar un numero secreto aleatorio
function agregarAmigoSecreto() {
        
        //traigo el dato ingresado
        let nombreAmigo1 = (document.getElementById('amigo').value);
         console.log(nombreAmigo1)
         //alert(nombreAmigo1);
         
         if (nombreAmigo1 === '') {
            alert('ingresa un nombre de amigo secreto')
         } else {
            //se agrega en la ultima posicion del arreglo
            listaAmigosSecretos.push(nombreAmigo1);
         }
    //}
}


//función que muestre en la consola todos los nombres
let listaAmigosSecretos = []
function mostrarAmigosSeparadamente(list) {
    for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

mostrarAmigosSeparadamente(listaAmigosSecretos) 

function sortearAmigo() {
    let randomAmigo = Math.floor(Math.random() * listaAmigosSecretos.length);
    let amigoSecret = listaAmigosSecretos[randomAmigo];
    console.log (amigoSecret)
    alert(`Tu amigo secreto es: ${amigoSecret}`)
}


//se crea una funcion para limpiar texto ingresado
function limpiarCaja(){

    //limpiar la caja
    document.querySelector('#amigo').value='';
}
