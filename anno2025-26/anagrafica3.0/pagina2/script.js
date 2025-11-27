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

    // Contenuto testuale
    let contenuto = "Carrello acquisti\n\n";
    contenuto += colonne.join(" | ") + "\n";

    dati.forEach(obj => {
        const valori = colonne.map(col => String(obj[col]));
        contenuto += valori.join(" | ") + "\n";
    });

    //
    // CREAZIONE PDF CON OFFSET CORRETTI
    //

    const objects = [];

    // Oggetto 1 – Catalog
    objects.push(`1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
`);

    // Oggetto 2 – Pages
    objects.push(`2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
`);

    // Oggetto 3 – Page
    objects.push(`3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>
endobj
`);

    // Oggetto 4 – Contenuto pagina
    const textStream = `BT
/F1 12 Tf
50 800 Td
${contenuto.replace(/\n/g, " T*\n")}
ET`;

    objects.push(`4 0 obj
<< /Length ${textStream.length} >>
stream
${textStream}
endstream
endobj
`);

    //
    // Costruzione PDF con offset calcolati
    //
    let pdf = "%PDF-1.4\n";
    const offsets = [0];

    for (let obj of objects) {
        offsets.push(pdf.length);
        pdf += obj;
    }

    const xrefPos = pdf.length;

    pdf += "xref\n";
    pdf += `0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";

    for (let i = 1; i < offsets.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }

    pdf += `trailer
<< /Size ${objects.length + 1} /Root 1 0 R >>
startxref
${xrefPos}
%%EOF`;

    //
    // Download via Blob
    //
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "carrello_acquisti.pdf";
    a.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}
