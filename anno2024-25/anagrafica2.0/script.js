const array=[];
const key=["nome","cognome","indirizzo","citta"];
function bottone(){
    var index = localStorage.length;
    array[0]= document.getElementById("nome").value;
    array[1]= document.getElementById("cognome").value;
    array[2]= document.getElementById("indirizzo").value;
    array[3]= document.getElementById("città").value;
    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("città").value="";
    document.getElementById("indirizzo").value="";
    /*if(array[0] != "" && array[1] != "" && array[2] != "" && array[3] != "" ){
        for(let i = 0;i<array.length;i++){
            localStorage.setItem(key[i]+index, array[i]);
        }
        index++;
    }*/
    if(array[0] != "" && array[1] != "" && array[2] != "" && array[3] != "" ){
        localStorage.setItem(index, array);
        index++;
    }

}
function vai_alla_tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2024-25/anagrafica2.0/pagina2.html";
}