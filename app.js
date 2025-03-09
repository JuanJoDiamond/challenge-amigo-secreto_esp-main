// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (inputAmigo.value === "") {
        alert("Debes ingresar un nombre");
        return;
    }
    listaAmigos.push(inputAmigo.value);
    //ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    ulListaAmigos.innerHTML += `<li>• ${inputAmigo.value.charAt(0).toUpperCase()}${inputAmigo.value.slice(1).toLowerCase()}</li>`;
    inputAmigo.value = "";
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("amigo").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            agregarAmigo(); 
        }
    });
});

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("Debes agregar al menos un Amigo");
        return;
    }
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El Amigo secreto sorteado es: ${amigoSorteado.toUpperCase()} .!!</li>`;
    

};

function limpiarLista() {
    listaAmigos.length = 0;
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = "";
    inputAmigo.value = "";
};


