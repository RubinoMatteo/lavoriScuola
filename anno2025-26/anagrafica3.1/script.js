let array = [];
sessionStorage.getItem(1) !== null ? array = JSON.parse(sessionStorage.getItem(1)) : array[0] = { name: "nome", memory: "memoria", OS: "Sistema Operativo" };
sessionStorage.setItem(1, JSON.stringify(array, null, 2));
function samsung() {
    sessionStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}
function apple() {
    sessionStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}
function huawei() {
    sessionStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.1/pagina2/index.html";
}

const subMenus = document.querySelectorAll(".sub-menu"),
    btns = document.querySelectorAll("button"),
    sidebar = document.querySelector(".sidebar"),
    headerImg = document.querySelector(".sidebar header img");

const reset = () => {
    btns.forEach(btn => btn.classList.remove("active"));
    subMenus.forEach(menu => (menu.style.height = 0));
};

const openSubmenu = element => {
    // Non permettere di aprire submenu se la sidebar è chiusa
    if (sidebar.classList.contains("collapsed")) return;

    reset();
    element.classList.add("active");
    const sibling = element.nextElementSibling;
    const ul = sibling.querySelector("ul");
    if (sibling.clientHeight == 0) {
        sibling.style.height = `${ul.clientHeight}px`;
    } else {
        sibling.style.height = 0;
        element.classList.remove("active");
    }
};
// Toggle sidebar quando clicchi sull'immagine
headerImg.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    // Mostra/nascondi carrello in base allo stato della sidebar
    if (!sidebar.classList.contains("collapsed")) {
        vediCarrello();
    } else {
        // Svuota il carrello quando la sidebar si chiude
        document.getElementById("carrello").innerHTML = "";
    }
    // Chiudi tutti i submenu quando collassi la sidebar
    if (sidebar.classList.contains("collapsed")) {
        reset();
    }
});
function vediCarrello() {
    let carrello = document.getElementById("carrello");
    carrello.innerHTML = "";
    const output = document.createElement("div");
    output.className = "card";
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
        dataArray.slice(1).forEach((item, index) => {
            let ul = document.createElement("ul");
            ul.innerHTML += `<h4 style="margin:0 0 10px; color:#555;">Elemento ${index}</h4>`;
            Object.entries(item).forEach(([key, value]) => {
                let li = document.createElement("li");
                li.innerHTML = `<strong style="color:#667eea;">${key}:</strong> ${value}`;
                ul.appendChild(li);
            });
            output.appendChild(ul);
        });
    } else {
        output.innerHTML = `<p style="color: red;">Nessun dato ricevuto</p>`;
    }
    carrello.appendChild(output);
    carrello.innerHTML+=`<br><div class="card">
                    <!--<a class="button" onclick="scarica(event)" href="" id="linkScaricaJson">&#x1f6d2; download json &#10515;</a>
                    <a class="button" onclick="scaricacsv(event)" href="" id="linkScaricacsv">&#x1f6d2; download csv &#10515;</a>
                    <a class="button" onclick="scaricaxml(event)" href="" id="linkScaricaxml">&#x1f6d2; download xml &#10515;</a>
                    --><a class="button" onclick="scaricaPDF(event)" href="" id="linkScaricaxml">&#x1f6d2; download PDF &#10515;</a>
                    <!--<a class="button" href="#" download="carrello_acquisti.json" id="linkScaricaJson">&#x1f6d2; download &#10515;</a>-->
                </div>`;
}

/*----------------------------------------------------
    download dello scontrino in diverse estensioni
------------------------------------------------------*/

/*function scarica(event){
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
}*/
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
    
    righe.forEach((riga, index) => {
        // Escape delle parentesi nel testo
        const testoEscaped = riga.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        
        if (index === 0) {
            // Prima riga - posizionamento assoluto
            textCommands += `50 ${yPos} Td\n(${testoEscaped}) Tj\n`;
        } else {
            // Righe successive - spostamento relativo verso il basso
            textCommands += `0 -15 Td\n(${testoEscaped}) Tj\n`;
        }
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

function contaElementi(){
    let scontrino=[];
    let conta=0;
    let data= json.parse(sessionStorage.getItem("1"));
    if(data.length>1){
        let dati= data.slice(1);
        for(let i=0; i<dati.length; i++){
            for(let j=0; j<dati.length; j++){
              if (dati[i].name == dati[j].name)
                conta++;
            }
              let obj ={name:dati[i].name, memory:dati[i].memory, OS:dati[i].OS, quantità:conta };
              scontrino.push(obj);
              conta = 0;
        }
        console.log(scontrino);
        return scontrino;
    }else{
        alert(il carrello é vuoto);
        return;
    }
}