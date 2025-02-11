// Variables //

const nombres = [];
const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoLista = document.getElementById("resultado");
const agregarBoton = document.getElementById("agregarAmigo()");
const seleccionarBoton = document.getElementById("sortearAmigo()");

if (!input || !listaAmigos || !agregarBoton){
    console.error("No se encontraron los elementos en el DOM");
    return;
}
//Se agregan los nombres a la lista//
agregarBoton.addEventListener ("click", function() {
    let nombre = input.value.trim();
    if (nombre !== "") {
        let li =document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido");
    }
});
