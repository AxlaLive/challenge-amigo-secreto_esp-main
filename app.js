// Variables //
let nombres = [];
let listAmigos = document.getElementById("listaAmigos");
let resultadoLista = document.getElementById("resultado");

//Se genera la lista//
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Escribe un nombre");
        return;
    }
//Se agregan los nombres ingresados al array//
    nombres.push(nombre);
    document.getElementById("amigo").value = "";
    enseñarAmigos();
}

function enseñarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of nombres){
        let li = document.createElement("li");
        li.textContent = amigo;
//Nos enseña la lista de nombres ingresados//
        lista.appendChild(li);
    }
}

//Se sortea un nombre de la lista aleatoriamente//
function sortearAmigo() {
    if(nombres.length > 0){
        let randomAmigo = Math.floor(Math.random()*nombres.length);
        resultadoLista.textContent = `Selecionado: ${nombres[randomAmigo]}`;
    } else {
        resultadoLista.textContent = "No hay datos en la lista";
    }
}

//Reiniciar el sorteo//
function reiniciarSorteoDeAmigo(){
//Reinicia el array//
    nombres = [];
//Reinicia los datos de la lista en HTML//
    listAmigos.innerHTML = "";
//Reinicia el resultado//
    resultadoLista.textContent = "Seleccionado: ";
}