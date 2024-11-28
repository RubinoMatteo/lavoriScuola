const array=[];
const key=["nome","cognome","indirizzo","citta"];
const tabella = document.getElementById("demo") ;
for(let i = 0;i<(localStorage.length/4);i++){
    for(let j = 0;j<key.length;j++){
        array.push(localStorage.getItem(key[j]+i))
    }
}
console.log(array)
tabella.innerHTML += "<tr>";
var str = ""
for (i = 0; i < localStorage.length; i++) {
    if(i%4==0){
        tabella.innerHTML += str + "</tr><tr>";
        str ="";
    }
    str += "<td>" + array[i] + "</td>";
}
tabella.innerHTML += str + "</tr><tr>";
function indietro(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anagrafica2.0/anagrafica2.0.html";
}