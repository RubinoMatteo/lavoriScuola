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

/*function vediCarrello() {
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
}*/
function vediCarrello() {
    let carrello = document.getElementById("carrello");
    carrello.innerHTML = "";
    const output = document.createElement("div");
    output.className = "card";
    let dataArray = contaElementi();
    if (!Array.isArray(dataArray)) {
        output.innerHTML = "<p style='color: red;'>Il dato non è un array</p>";
        return;
    }
    dataArray.forEach((item, index) => {
        let ul = document.createElement("ul");
        ul.innerHTML += `<h4 style="margin:0 0 10px; color:#555;">Elemento ${index}</h4>`;
        Object.entries(item).forEach(([key, value]) => {
            let li = document.createElement("li");
            li.innerHTML = `<strong style="color:#667eea;">${key}:</strong> ${value}`;
            ul.appendChild(li);
        });
        output.appendChild(ul);
    });
    carrello.appendChild(output);
    carrello.innerHTML += `<br><div class="card">
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
/*function scaricaPDF(event) {
    event.preventDefault();

    //const stringaJson = sessionStorage.getItem("1");
    //if (!stringaJson) {
    //    alert("Il carrello è vuoto!");
    //    return;
    //}

    let dati;
    try {
        //dati = JSON.parse(stringaJson);
        dati = contaElementi();
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
    //righe.push("");
    //righe.push(colonne.join(" | "));
    righe.push("-".repeat(50));

    dati.forEach(obj => {//da sistemare meglio per migliorare la leggibilità nel pdf 
        //const valori = colonne.map(col => String(obj[col]));
        //righe.push(valori.join(""));
        let output = "";
        righe.push(`name : ${obj.name}`);
        righe.push(`memory : ${obj.memory}`);
        righe.push( `OS : ${obj.OS}`);
        righe.push(`quantità : ${obj.quantità}`);
        righe.push("_".repeat(50));
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
}*/
/*function scaricaPDF(event) {
    event.preventDefault();

    let dati;
    try {
        dati = contaElementi();
    } catch (e) {
        alert("Errore: dati non validi!");
        return;
    }

    if (!Array.isArray(dati)) {
        dati = [dati];
    }

    // Informazioni dell'emittente
    const emittente = {
        nome: "TechStore S.r.l.",
        indirizzo: "Via Roma, 123",
        citta: "Milano, 20100",
        piva: "P.IVA: 12345678901",
        telefono: "Tel: +39 02 1234567"
    };

    // Calcolo totale (assumendo che ogni prodotto abbia un prezzo)
    // Se non hai il prezzo, dovrai aggiungerlo ai dati
    let totale = 0;
    dati.forEach(obj => {
        const prezzo = obj.prezzo || 999.99; // Prezzo di default se non specificato
        const quantita = obj.quantità || 1;
        totale += prezzo * quantita;
    });

    // Costruzione del contenuto del PDF
    let yPos = 800;
    let textCommands = "BT\n/F1 10 Tf\n";

    // Helper per aggiungere testo centrato
    function addCenteredText(text, y) {
        const testoEscaped = text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        textCommands += `0 ${y - yPos} Td\n(${testoEscaped}) Tj\n`;
        yPos = y;
    }

    // Helper per aggiungere testo normale
    function addText(text, xOffset = 0) {
        const testoEscaped = text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        textCommands += `${xOffset} -15 Td\n(${testoEscaped}) Tj\n`;
    }

    // INTESTAZIONE
    textCommands += `200 ${yPos} Td\n`; // Posizionamento iniziale centrato
    
    // Logo (testo) - in un PDF reale potresti inserire un'immagine
    textCommands += `/F1 14 Tf\n`;
    addText("*** TECHSTORE ***", 0);
    
    textCommands += `/F1 9 Tf\n`;
    addText(emittente.nome, 0);
    addText(emittente.indirizzo, 0);
    addText(emittente.citta, 0);
    addText(emittente.piva, 0);
    addText(emittente.telefono, 0);
    
    addText("", 0); // Riga vuota
    addText("================================", 0);
    
    // Data e ora
    const now = new Date();
    const dataOra = `Data: ${now.toLocaleDateString('it-IT')} ${now.toLocaleTimeString('it-IT')}`;
    addText(dataOra, 0);
    addText("================================", 0);
    addText("", 0);

    // PRODOTTI
    addText("DESCRIZIONE", 0);
    addText("", 0);

    dati.forEach(obj => {
        const nome = obj.name || "Prodotto";
        const quantita = obj.quantità || 1;
        const prezzo = obj.prezzo || 999.99;
        const totaleRiga = (prezzo * quantita).toFixed(2);
        
        // Riga prodotto: quantità x nome
        addText(`${quantita} x ${nome}`, 0);
        
        // Dettagli aggiuntivi (memory, OS) se presenti
        if (obj.memory) {
            addText(`  Memory: ${obj.memory}`, 0);
        }
        if (obj.OS) {
            addText(`  OS: ${obj.OS}`, 0);
        }
        
        // Prezzo allineato a destra (simulato con spazi)
        const prezzoStr = `EUR ${totaleRiga}`;
        const spaces = " ".repeat(Math.max(0, 35 - prezzoStr.length));
        addText(`${spaces}${prezzoStr}`, 0);
        addText("", 0);
    });

    // TOTALE
    addText("================================", 0);
    const totaleStr = `EUR ${totale.toFixed(2)}`;
    const spacesTotale = " ".repeat(Math.max(0, 25 - totaleStr.length));
    textCommands += `/F1 12 Tf\n`;
    addText(`TOTALE:${spacesTotale}${totaleStr}`, 0);
    textCommands += `/F1 9 Tf\n`;
    addText("================================", 0);
    
    addText("", 0);
    addText("Grazie per il suo acquisto!", 0);
    addText("", 0);
    addText("IVA inclusa 22%", 0);

    textCommands += "ET";

    // Costruzione del PDF
    const objects = [];
    const offsets = [0];

    function addObject(content) {
        objects.push(content);
    }

    addObject("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
    addObject("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
    addObject("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n");
    addObject(`4 0 obj\n<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream\nendobj\n`);
    addObject("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

    let pdf = "%PDF-1.4\n";

    for (let i = 0; i < objects.length; i++) {
        offsets.push(pdf.length);
        pdf += objects[i];
    }

    const xrefPos = pdf.length;

    pdf += "xref\n";
    pdf += `0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";

    for (let i = 1; i <= objects.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }

    pdf += "trailer\n";
    pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
    pdf += "startxref\n";
    pdf += `${xrefPos}\n`;
    pdf += "%%EOF";

    // Download
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "scontrino_" + Date.now() + ".pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}*/
function scaricaPDF(event) {
    event.preventDefault();

    let dati;
    try {
        dati = contaElementi();
    } catch (e) {
        alert("Errore: dati non validi!");
        return;
    }

    if (!Array.isArray(dati)) {
        dati = [dati];
    }

    // Logo in base64 (il tuo logo)
    const logoBase64 = "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"; // (stringa completa nel tuo documento)
    
    // Informazioni dell'emittente
    const emittente = {
        nome: "TechStore S.r.l.",
        indirizzo: "Via Roma, 123",
        citta: "Milano, 20100",
        piva: "P.IVA: 12345678901",
        telefono: "Tel: +39 02 1234567"
    };

    // Calcolo totale
    let totale = 0;
    dati.forEach(obj => {
        const prezzo = obj.prezzo || 999.99;
        const quantita = obj.quantità || 1;
        totale += prezzo * quantita;
    });

    // Costruzione del contenuto del PDF
    let yPos = 720; // Più in basso per fare spazio al logo
    let textCommands = "";

    // LOGO - Posizionato in alto al centro
    textCommands += "q\n"; // Salva lo stato grafico
    textCommands += "60 0 0 60 267 770 cm\n"; // Logo 60x60, centrato a x=267, y=770
    textCommands += "/Im1 Do\n"; // Disegna l'immagine
    textCommands += "Q\n"; // Ripristina lo stato grafico

    textCommands += "BT\n/F1 10 Tf\n";

    // Helper per aggiungere testo
    function addText(text, xOffset = 0) {
        const testoEscaped = text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        textCommands += `${xOffset} -15 Td\n(${testoEscaped}) Tj\n`;
    }

    // INTESTAZIONE (dopo il logo)
    textCommands += `200 ${yPos} Td\n`;
    
    textCommands += `/F1 14 Tf\n`;
    addText("*** TECHSTORE ***", 0);
    
    textCommands += `/F1 9 Tf\n`;
    addText(emittente.nome, 0);
    addText(emittente.indirizzo, 0);
    addText(emittente.citta, 0);
    addText(emittente.piva, 0);
    addText(emittente.telefono, 0);
    
    addText("", 0);
    addText("================================", 0);
    
    // Data e ora
    const now = new Date();
    const dataOra = `Data: ${now.toLocaleDateString('it-IT')} ${now.toLocaleTimeString('it-IT')}`;
    addText(dataOra, 0);
    addText("================================", 0);
    addText("", 0);

    // PRODOTTI
    addText("DESCRIZIONE", 0);
    addText("", 0);

    dati.forEach(obj => {
        const nome = obj.name || "Prodotto";
        const quantita = obj.quantità || 1;
        const prezzo = obj.prezzo || 999.99;
        const totaleRiga = (prezzo * quantita).toFixed(2);
        
        addText(`${quantita} x ${nome}`, 0);
        
        if (obj.memory) {
            addText(`  Memory: ${obj.memory}`, 0);
        }
        if (obj.OS) {
            addText(`  OS: ${obj.OS}`, 0);
        }
        
        const prezzoStr = `EUR ${totaleRiga}`;
        const spaces = " ".repeat(Math.max(0, 35 - prezzoStr.length));
        addText(`${spaces}${prezzoStr}`, 0);
        addText("", 0);
    });

    // TOTALE
    addText("================================", 0);
    const totaleStr = `EUR ${totale.toFixed(2)}`;
    const spacesTotale = " ".repeat(Math.max(0, 25 - totaleStr.length));
    textCommands += `/F1 12 Tf\n`;
    addText(`TOTALE:${spacesTotale}${totaleStr}`, 0);
    textCommands += `/F1 9 Tf\n`;
    addText("================================", 0);
    
    addText("", 0);
    addText("Grazie per il suo acquisto!", 0);
    addText("", 0);
    addText("IVA inclusa 22%", 0);

    textCommands += "ET";

    // Costruzione del PDF
    const objects = [];
    const offsets = [0];

    function addObject(content) {
        objects.push(content);
    }

    // Oggetto 1 – Catalog
    addObject("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

    // Oggetto 2 – Pages
    addObject("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");

    // Oggetto 3 – Page (con riferimento al font e all'immagine)
    addObject("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> /XObject << /Im1 6 0 R >> >> >>\nendobj\n");

    // Oggetto 4 – Stream del contenuto
    addObject(`4 0 obj\n<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream\nendobj\n`);

    // Oggetto 5 – Font
    addObject("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

    // Oggetto 6 – Immagine (il tuo logo PNG)
    // Nota: per PNG devi usare un filtro diverso. Il modo più semplice è convertire a JPG
    // o usare FlateDecode. Per semplicità, assumo che tu abbia il PNG come stream
    const imageStream = atob(logoBase64);
    addObject(`6 0 obj\n<< /Type /XObject /Subtype /Image /Width 279 /Height 279 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /FlateDecode /Length ${imageStream.length} >>\nstream\n${imageStream}\nendstream\nendobj\n`);

    // Costruzione PDF finale
    let pdf = "%PDF-1.4\n";

    for (let i = 0; i < objects.length; i++) {
        offsets.push(pdf.length);
        pdf += objects[i];
    }

    const xrefPos = pdf.length;

    pdf += "xref\n";
    pdf += `0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";

    for (let i = 1; i <= objects.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }

    pdf += "trailer\n";
    pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
    pdf += "startxref\n";
    pdf += `${xrefPos}\n`;
    pdf += "%%EOF";

    // Download
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "scontrino_" + Date.now() + ".pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function contaElementi() {
    let scontrino = [];
    let index = [];
    let conta = 0;
    let data = JSON.parse(sessionStorage.getItem("1"));
    if (data.length > 1) {
        let dati = data.slice(1);
        for (let i = 0; i < dati.length; i++) {
            for (let j = 0; j < dati.length; j++) {
                if (dati[i].name == dati[j].name) {
                    conta++;
                    if (conta > 1)
                        index.push(j);
                }
            }
            let controllo = false ;
            if(conta>1)
                for (let j = 0; j < scontrino.length; j++) 
                    if (dati[i].name == scontrino[j].name) 
                        controllo=true;
            if(!controllo){
            let obj = { name: dati[i].name, memory: dati[i].memory, OS: dati[i].OS, quantità: conta };
            scontrino.push(obj);
            }
            conta = 0;
        }
        console.log(scontrino);
        return scontrino;
    } else {
        alert("il carrello é vuoto");
        return;
    }
}