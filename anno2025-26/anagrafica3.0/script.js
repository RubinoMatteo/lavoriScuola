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

// Recupero del JSON dalla key "1"
const rawData = sessionStorage.getItem("1");

if (rawData) {
    let data;

    try {
        data = JSON.parse(rawData); // Converte il JSON in oggetto
    } catch (e) {
        output.innerHTML = "<p style='color: red;'>Errore nel leggere i dati</p>";
        throw e;
    }

    let ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    // Itera sulle coppie chiave/valore del JSON
    Object.entries(data).forEach(([key, value]) => {
        let li = document.createElement("li");
        li.style.padding = "8px 0";
        li.style.borderBottom = "1px solid #e2e8f0";

        li.innerHTML = `<strong style="color: #667eea;">${key}:</strong> ${value}`;
        ul.appendChild(li);
    });

    output.appendChild(ul);

} else {
    output.innerHTML = `<p style="color: #999;">Nessun dato ricevuto</p>`;
}
}