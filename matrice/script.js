let a;
console.log(document.getElementById("numeropari").value)
if(document.getElementById("numeropari").value > 2 && document.getElementById("numeropari").value % 2 == 0){
   a = document.getElementById("numeropari").value;
}else{
    a=4;
}
console.log(a)
const matrice = new Array(a);
for(let i=0;i<matrice.length;i++){
    matrice[i] = new Array(matrice.length);
    for(let j=0;j<matrice[i].length;j++){
        let array = matrice[i];
        array[j] = parseInt( Math.random()*100);
        
    }
}
const table = document.getElementById("demo");
matrice.forEach(element =>{
    const riga = document.createElement("tr");
    element.forEach(elemento => {
        console.log(element[elemento])
        const colonna = document.createElement("td")
        const testo = document.createTextNode(element[elemento])
        colonna.appendChild(testo)
        riga.appendChild(colonna)
    })

    table.appendChild(riga)
})