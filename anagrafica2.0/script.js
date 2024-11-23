const array=[];
const key=[nome,cognome,indirizzo,citta];
var index=0;
function bottone()
{
    array[0]= document.getElementById("nome").value;
    array[1]= document.getElementById("cognome").value;
    array[2]= document.getElementById("indirizzo").value;
    array[3]= document.getElementById("città").value;
    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("città").value="";
    document.getElementById("indirizzo").value="";
    if(array[0]!==undefined||array[1]!==undefined||array[2]!==undefined||array[3]!==undefined){
        for(let i = 0;i<array.length;i++){
            localStorage.setItem(key[i]+index, array[i]);
        }
        index++;
    }
}
function vai_alla_tabella(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anagrafica2.0/pagina2.html";
}