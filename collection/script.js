function tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/collection/index2.html";
}

const array=[];
function scrivi(){
    array+={ nome:document.getElementById("nome").value
        cognome:document.getElementById("cognome").value
        indirizzo:document.getElementById("indirizzo").value
        età:document.getElementById("età").value
        seeso:document.getElementById("sesso").value};
    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("città").value="";
    document.getElementById("indirizzo").value="";
    const data = JSON.stringify(array);
    localStorage.setItem("data", myJSON);
}function tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/collection/index2.html";
}
const array = [];
function scrivi(){
    const userData = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        indirizzo: document.getElementById("indirizzo").value,
        età: document.getElementById("età").value,
        sesso: document.getElementById("sesso").value
    };
    array.push(userData);
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("età").value = "";
            document.getElementById("sesso").value = "";
    const data = JSON.stringify(array);
            localStorage.setItem("data", data);
}