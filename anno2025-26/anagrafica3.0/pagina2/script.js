switch(sessionStorage.getItem(0)) {
  case "samsung":
    samsung();
    break;
  case "apple":
    apple();
    break;
    case "huawei":
    huawei();
    break;
  default:
    errore();
}
function scrivi(nome,memory,os,image){
    return`<div class="card">
                            <h3>${nome}</h3>
                            <p><b>Memoria</b>:${memory}</p>
                            <p><b>S.O.</b>:${os}</p>
                            <img id="img" src="${image}" alt="samsung"> 
                            <a target="_blank" class="button" onclick="acquista('${name}','${memory}','${os}')" > &#128722; </a>
                        </div>`;
}
function samsung(){
    var xmlhttp = new XMLHttpRequest();
    var stampa = "";
xmlhttp.open("GET", "samsung.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (x in myObj.samsung) 
                stampa += scrivi(myObj.samsung[x].name,myObj.samsung[x].memory,myObj.samsung[x].os,myObj.samsung[x].image);
            document.getElementById("demo").innerHTML = `${stampa}`;
            stampa="";
        }
    };
};
function apple(){
    var xmlhttp = new XMLHttpRequest();
    var stampa = "";
    xmlhttp.open("GET", "apple.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var iPhone = xmlDoc.getElementsByTagName("iPhone");
            for (x = 0; x < iPhone.length; x++) {
                var name = iPhone[x].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var memory = iPhone[x].getElementsByTagName("memory")[0].childNodes[0].nodeValue;
                var os = iPhone[x].getElementsByTagName("os")[0].childNodes[0].nodeValue;
                var image = iPhone[x].getElementsByTagName("image")[0].childNodes[0].nodeValue;
                stampa+=`<div class="card">
                            <h3>${name}</h3>
                            <p><b>Memoria</b>:${memory}</p>
                            <p><b>S.O.</b>:${os}</p>
                            <img id="img" src="${image}" alt="iPhone"> 
                            <a target="_blank" class="button" onclick="acquista('${name}','${memory}','${os}')" > &#x1f6d2; </a>
                        </div> `;
            }            
            document.getElementById("demo").innerHTML = `${stampa}`;
            stampa = "";
        }
    };
};
function dividi(cnt){
    let righe= cnt.split("\n")
    let colonne=[]
    for (let i = 0; i < righe.length; i++) {
        colonne[i] = righe[i].split(',')
    }
    return colonne;
}
function huawei(){
    var xmlhttp = new XMLHttpRequest();
    var stampa = "";
    xmlhttp.open("GET", "huawei.csv", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseText;
            var huawei = dividi(xmlDoc);
            for (let i = 1; i < huawei.length; i++) {
                stampa+=`<div class="card">
                            <h3>${huawei[i][0]}</h3>
                            <p><b>Memoria</b>:${huawei[i][1]}</p>
                            <p><b>S.O.</b>:${huawei[i][2]}</p>
                            <img id="img" src="${huawei[i][3]}" alt="iPhone"> 
                            <a target="_blank" class="button" onclick="acquista('${huawei[i][0]}','${huawei[i][1]}','${huawei[i][2]}')" > &#x1f6d2; </a>
                            </div> `;
            }
            document.getElementById("demo").innerHTML = `${stampa}`;
            stampa = "";
        }
    };
};
function errore(){
    document.getElementById("demo").innerHTML = `<h1>error 404</h1><br><p>pagina non trovata</p>`;
};
var carrello=[];
let quantità=0;
function acquista(n,m,S){
    carrello=JSON.parse(sessionStorage.getItem(1));
    quantità=JSON.parse(sessionStorage.getItem(1)).length;
    carrello[quantità]= {name:n,memory:m,OS:S};
    quantità++;
    sessionStorage.setItem(1, JSON.stringify(carrello, null, 2));
    console.log(carrello);
};
/*const linkScarica = document.getElementById('linkScaricaJson');
linkScarica.addEventListener('click', function(event) {
    const stringaJson = sessionStorage.getItem(1); 
    const blob = new Blob([stringaJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    linkScarica.href = url;
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
    sessionStorage.clear();
});*//*
function scarica(event){
    event.preventDefault();
    const stringaJson = sessionStorage.getItem(1); 
    if (!stringaJson) {
        alert("Il carrello è vuoto!");
        return;
    }
    const blob = new Blob([stringaJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    linkScarica.href = url;
    linkScarica.download = "carrello_acquisti.json";
    linkScarica.click();
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}*/
function scarica(event){
    event.preventDefault();
    const stringaJson = sessionStorage.getItem("1"); 
    if (!stringaJson) {
        alert("Il carrello è vuoto!");
        return;
    }
    const blob = new Blob([stringaJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "carrello_acquisti.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}
function scaricacsv(event) {
    event.preventDefault();
    const stringaJson = sessionStorage.getItem("1");
    if (!stringaJson) {
        alert("Il carrello è vuoto!");
        return;
    }
    let dati;
    try {
        dati = JSON.parse(stringaJson);
    } catch (e) {
        alert("Errore: dati non validi!");
        return;
    }
    if (!Array.isArray(dati)) {
        dati = [dati];
    }
    const colonne = Object.keys(dati[0]);
    const righe = [];
    righe.push(colonne.join(";"));

    dati.forEach(obj => {
        const valori = colonne.map(col => String(obj[col]).replace(/;/g, ",")); // evita rottura colonne
        righe.push(valori.join(";"));
    });

    const csvContent = righe.join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = "carrello_acquisti.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function scaricaxml(event) {
    event.preventDefault();
    const stringaJson = sessionStorage.getItem("1");
    if (!stringaJson) {
        alert("Il carrello è vuoto!");
        return;
    }
    let dati;
    try {
        dati = JSON.parse(stringaJson);
    } catch (e) {
        alert("Errore: dati non validi!");
        return;
    }
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<carrello>\n`;
    dati.forEach(item => {
        xml += "  <item>\n";
        for (const chiave in item) {
            const valore = String(item[chiave])
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            xml += `    <${chiave}>${valore}</${chiave}>\n`;
        }
        xml += "  </item>\n";
    });
    xml += "</carrello>";
    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "carrello_acquisti.xml";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function scaricaPDF(event) {
    event.preventDefault();

    const stringaJson = sessionStorage.getItem("1");
    if (!stringaJson) {
        alert("Il carrello è vuoto!");
        return;
    }

    let dati;
    try {
        dati = JSON.parse(stringaJson);
    } catch (e) {
        alert("Errore: dati non validi!");
        return;
    }

    if (!Array.isArray(dati)) {
        dati = [dati];
    }

    const colonne = Object.keys(dati[0]);

    // Costruzione del contenuto testuale per il PDF
    let righe = [];
    righe.push("CARRELLO ACQUISTI");
    righe.push("");
    righe.push(colonne.join(" | "));
    righe.push("-".repeat(50));

    dati.forEach(obj => {
        const valori = colonne.map(col => String(obj[col]));
        righe.push(valori.join(" | "));
    });

    // Creazione del contenuto stream con posizionamento corretto
    let yPos = 800;
    let textCommands = "BT\n/F1 12 Tf\n";
    
    righe.forEach(riga => {
        // Escape delle parentesi nel testo
        const testoEscaped = riga.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        textCommands += `50 ${yPos} Td\n(${testoEscaped}) Tj\n`;
        yPos -= 15; // Spaziatura tra righe
    });
    
    textCommands += "ET";

    // Array per memorizzare gli oggetti
    const objects = [];
    const offsets = [0]; // Offset 0 è sempre all'inizio

    // Funzione helper per aggiungere un oggetto
    function addObject(content) {
        objects.push(content);
    }

    // Oggetto 1 – Catalog
    addObject("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

    // Oggetto 2 – Pages
    addObject("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");

    // Oggetto 3 – Page (con riferimento al font)
    addObject("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n");

    // Oggetto 4 – Stream del contenuto
    addObject(`4 0 obj\n<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream\nendobj\n`);

    // Oggetto 5 – Font
    addObject("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");

    // Costruzione del PDF finale
    let pdf = "%PDF-1.4\n";

    // Aggiunta degli oggetti e calcolo degli offset
    for (let i = 0; i < objects.length; i++) {
        offsets.push(pdf.length);
        pdf += objects[i];
    }

    // Posizione della tabella xref
    const xrefPos = pdf.length;

    // Tabella xref
    pdf += "xref\n";
    pdf += `0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";

    for (let i = 1; i <= objects.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }

    // Trailer
    pdf += "trailer\n";
    pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
    pdf += "startxref\n";
    pdf += `${xrefPos}\n`;
    pdf += "%%EOF";

    // Download del file
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "carrello_acquisti.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}