// Variables //

const nombres = [];
const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const agregarBoton = document.getElementById("agregarAmigo");
const seleccionarBoton = document.getElementById("sortearAmigo");
const seleccionarNombre = document.getElementById("Sortear amigo secreto");


//Se agregan los nombres a la lista//
agregarBoton.addEventListener("click", function () {
    const nombres = input.nodeValue.trim();
    if (nombres !== "") {
        nombres.push(nombres);
        
        const li = document.createElement("li");
        li.textContent = nombres;
        listaAmigos.appendChild(li);

        input.nodeValue = "";

    }
});
