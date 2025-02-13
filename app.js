// Variables //

let nombres = [];
let input = document.getElementById("amigo");
let listAmigos = document.getElementById("listaAmigos");
let resultadoLista = document.getElementById("resultado");
let agregarBoton = document.getElementById("agregarAmigo()");
let seleccionarBoton = document.getElementById("sortearAmigo()");

console.log(nombres);

//Se agregan los nombres a la lista//
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Escribe un nombre");
        return;
    }
    nombres.push(nombre);
    document.getElementById("amigo").value = "";
    enseñarAmigos();
};

function enseñarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of nombres){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}