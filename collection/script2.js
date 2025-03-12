const table = document.createElement("table");
generaTabella(m);
document.querySelector("body").appendChild("table");


function generaTabella(matrice){
    matrice.forEach(element =>{
        const riga = document.createElement("tr");
        Object.keys(element).forEach(elemento => {
            const colonna = document.createElement("td");
            colonna.id= "e"+index;
            const testo = document.createTextNode(element[elemento]);
            colonna.appendChild(testo);
            riga.appendChild(colonna);
            index++;
        })
        table.appendChild(riga);
    })
}
