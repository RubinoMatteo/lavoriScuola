function vai_alla_tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/collection/index2.html";
}

const array=[];
function bottone(){
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
}