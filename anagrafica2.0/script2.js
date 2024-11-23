const array=[];
const key=["nome","cognome","indirizzo","citta"];
const tabella = document.getElementById("demo") ;
for(let i = 0;i<(localStorage.length/4);i++){
    for(let j = 0;j<array.length;j++){
        array.push(localStorage.getItem(key[j]+i))
    }
}
tabella.innerHTML += "<tr>";
for (i = 0; i < localStorage.length; i++) {
    tabella.innerHTML += "<td>" + array[i] + "</td>";
    if(i%4==0){
        tabella.innerHTML += str + "</tr>";
    }
}