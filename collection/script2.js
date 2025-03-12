let text = localStorage.getItem("data");
const LS=JSON.parse(text);
console.log (LS);
const table = document.createElement("table");
generaTabella(LS);
document.querySelector("body").appendChild("table");


function generaTabella(arrObj){
    arrObj.forEach(element =>{
        const riga = document.createElement("tr");
        Object.keys(element).forEach(elemento => {
            const colonna = document.createElement("td");
            const testo = document.createTextNode(element[elemento]);
            colonna.appendChild(testo);
            riga.appendChild(colonna);
        })
        table.appendChild(riga);
    })
}

function indietro(){
    location.href = "https://rubinomatteo.github.io/lavoriScuola/collection/index.html";
}