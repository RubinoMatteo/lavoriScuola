function tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/collection/index2.html";
}

let  array = [{
    nome: "nome",
    cognome: "cognome",
    indirizzo: "indirizzo",
    età: "età",
    sesso: "sesso"
}];
function scrivi(){
    if(localStorage.lengt!=0){
        array=JSON.parse(localStorage.getItem("data"))
    }
    const userData = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        indirizzo: document.getElementById("indirizzo").value,
        età: document.getElementById("età").value,
        sesso: document.getElementById("sesso").value
    };
    if(userData.nome==""||userData.cognome==""||userData.indirizzo==""||userData.età==""||userData.sesso==""){
        alert("riempi tutti i campi");
    }else{
        array.push(userData);
    }
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("età").value = "";
            document.getElementById("sesso").value = "";
    const data = JSON.stringify(array);
            localStorage.setItem("data", data);
}