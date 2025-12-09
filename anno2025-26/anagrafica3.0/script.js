let array = [];
sessionStorage.getItem(1) !== null ? array = JSON.parse(sessionStorage.getItem(1)) : array[0] = { name: "nome", memory: "memoria", OS: "Sistema Operativo", prezzo: "prezzo" };
sessionStorage.setItem(1, JSON.stringify(array, null, 2));
function samsung() {
    sessionStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function apple() {
    sessionStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function huawei() {
    sessionStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
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
                                <a class="button" onclick="scaricaPDF(event)" href="" id="linkScaricaxml">&#x1f6d2; download PDF &#10515;</a>
                                </div>`;
}

/*----------------------------------------------------
    download dello scontrino in diverse estensioni
------------------------------------------------------*/

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

    // Informazioni dell'emittente
    const emittente = {
        nome: "Rubi TechStore S.r.l.",
        indirizzo: "Via Raffaello Sanzio, 2",
        citta: "Rho, 20017",
        piva: "P.IVA: 12345678901",
        telefono: "Tel: +39 02 1234567"
    };
    
    let divisore = "=".repeat(35);
    // Calcolo totale
    let totale = 0;
    dati.forEach(obj => {
        const prezzo = obj.prezzo || 999.99; // Prezzo di default se non specificato
        const quantita = obj.quantità || 1;
        totale += prezzo * quantita;
    });

    // Creazione del contenuto stream con posizionamento corretto
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
    
    // Logo (testo nome negozio) - in un PDF reale potresti inserire un'immagine
    textCommands += `/F1 14 Tf\n`;
    addText("** RUBI TECHSTORE **", 0);

    //informazionni emittente 
    textCommands += `/F1 9 Tf\n`;
    addText(emittente.nome, 0);
    addText(emittente.indirizzo, 0);
    addText(emittente.citta, 0);
    addText(emittente.piva, 0);
    addText(emittente.telefono, 0);

    addText("", 0); // Riga vuota
    addText(divisore, 0);
    
    // Data e ora
    const now = new Date();
    const dataOra = `Data: ${now.toLocaleDateString('it-IT')} ${now.toLocaleTimeString('it-IT')}`;
    addText(dataOra, 0);
    addText(divisore, 0);
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
        
        // Prezzo allineato a destra (simulato con spazi)
        const prezzoStr = `EUR ${totaleRiga}`;
        const spaces = " ".repeat(Math.max(0, 35 - prezzoStr.length));
        addText(`${spaces}${prezzoStr}`, 0);
        addText("", 0);
    });

    // TOTALE
    addText(divisore, 0);
    const totaleStr = `EUR ${totale.toFixed(2)}`;
    const spacesTotale = " ".repeat(Math.max(0, 25 - totaleStr.length));
    textCommands += `/F1 12 Tf\n`;
    addText(`TOTALE:${spacesTotale}${totaleStr}`, 0);
    textCommands += `/F1 9 Tf\n`;
    addText(divisore, 0);
    
    addText("", 0);
    addText("Grazie per il suo acquisto!", 0);
    addText("", 0);
    addText("IVA inclusa 22%", 0);

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
    addObject("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

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
            let obj = { name: dati[i].name, memory: dati[i].memory, OS: dati[i].OS, prezzo: dati[i].prezzo, quantità: conta };
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