document.getElementById("visualizza").style.background ="none";

array=[];
sessionStorage.getItem(1) !== null? array=JSON.parse(sessionStorage.getItem(1)) : array[0]={name:"nome",memory:"memoria",OS:"Sistema Operativo"};
sessionStorage.setItem(1, JSON.stringify(array, null, 2));
function samsung(){
    sessionStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function apple(){
    sessionStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function huawei(){
    sessionStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}

function vediCarrello(){
const output = document.getElementById("visualizza");
document.getElementById("visualizza").style.background ="rgba(255, 255, 255, 0.3)";
const rawData = sessionStorage.getItem("1");
if (rawData) {
    let dataArray;
    try {
        dataArray = JSON.parse(rawData); 
    } catch (e) {
        output.innerHTML = "<p style='color: red;'>Errore nel leggere il JSON</p>";
        throw e;
    }
    if (!Array.isArray(dataArray)) {
        output.innerHTML = "<p style='color: red;'>Il dato non è un array</p>";
        return;
    }
    dataArray.forEach((item, index) => {
        let ul = document.createElement("ul");
        if (index === 0) {
            ul.innerHTML += `<h4 style="margin:0 0 10px; color:#555;">Intestazione</h4>`;
        } else {
            ul.innerHTML += `<h4 style="margin:0 0 10px; color:#555;">Elemento ${index}</h4>`;
        }
        Object.entries(item).forEach(([key, value]) => {
            let li = document.createElement("li");
            li.innerHTML = `<strong style="color:#667eea;">${key}:</strong> ${value}`;
            ul.appendChild(li);
        });
        output.appendChild(ul);
    });
} else {
    output.innerHTML = `<p style="color: #999;">Nessun dato ricevuto</p>`;
}
}