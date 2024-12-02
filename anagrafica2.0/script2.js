const array=[];
var cose=[];
//const key=["nome","cognome","indirizzo","citta"];
const tabella = document.getElementById("demo") ;
/*for(let i = 0;i<(localStorage.length/4);i++){
    for(let j = 0;j<key.length;j++){
        array.push(localStorage.getItem(key[j]+i))
    }
}
tabella.innerHTML += "<tr>";
var str = ""
for (i = 0; i < localStorage.length; i++) {
    if(i%4==0){
        tabella.innerHTML += str + "</tr><tr>";
        str ="";
    }
    str += "<td>" + array[i] + "</td>";
}
tabella.innerHTML += str + "</tr><tr>";*/

for(let i = 0;i<localStorage.length;i++){
    array.push(localStorage.getItem(i));
}
for(let i = 0;i<array.length;i++){
   cose.push(array[i].split(","));
}
console.log(cose);
tabella.innerHTML += "<tr>";
var str = ""
for (i = 0; i < cose.length; i++) {
    for(let i =0;i<4;i++){
        str += "<td>" + cose[i] + "</td>";
    }
    
    tabella.innerHTML += str + "</tr><tr>";
    str ="";
}
tabella.innerHTML += str + "</tr><tr>";
function indietro(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anagrafica2.0/index.html";
}