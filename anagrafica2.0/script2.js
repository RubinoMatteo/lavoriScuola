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
    str += "<td>" + array[i] + "</td>";
    if(i%4==0){
        tabella.innerHTML += str + "</tr><tr>";
        str ="";
    }
}