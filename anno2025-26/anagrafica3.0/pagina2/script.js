switch(localStorage.getItem(0)) {
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
function samsung(){
    var xmlhttp = new XMLHttpRequest();
    var stampa = "";
xmlhttp.open("GET", "samsung.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (x in myObj.samsung) 
                stampa += `<div class="card">
                            <h3>${myObj.samsung[x].name}</h3>
                            <p><b>Memoria</b>:${myObj.samsung[x].memory}</p>
                            <p><b>S.O.</b>:${myObj.samsung[x].os}</p>
                            <img id="img" src="${myObj.samsung[x].image}" alt="samsung"> 
                            <a target="_blank" class="button" onclick="acquista('${myObj.samsung[x].name}','${myObj.samsung[x].memory}','${myObj.samsung[x].os}')" > &#128722; </a>
                        </div>`;
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
/*<div class="card">
                    <h3>samsung</h3>
                    <a target="_blank" class="button" onclick="samsung()" >Visualizza &rarr;</a>
                </div>*/
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
/*<div class="card">
                    <h3>samsung</h3>
                    <a target="_blank" class="button" onclick="samsung()" >Visualizza &rarr;</a>
                </div>*/
};
function errore(){
    document.getElementById("demo").innerHTML = `<h1>error 404</h1><br><p>pagina non trovata</p>`;
};
var carrello=[];
let quantità=0;
function acquista(n,m,S){
    carrello=JSON.parse(localStorage.getItem(1));
    quantità=JSON.parse(localStorage.getItem(1)).length;
    carrello[quantità]= {name:n,memory:m,OS:S};
    quantità++;
    localStorage.setItem(1, JSON.stringify(carrello, null, 2));
    console.log(carrello);
};

const linkScarica = document.getElementById('linkScaricaJson');
/*linkScarica.addEventListener('click', function(event) {
    
    // Converti l'oggetto JavaScript in una stringa JSON formattata
    const stringaJson = localStorage.getItem(1); 
    
    // Crea un Blob con il contenuto JSON e specifica il tipo MIME corretto
    const blob = new Blob([stringaJson], { type: 'application/json' });
    
    // Genera un URL temporaneo che punta al Blob
    const url = URL.createObjectURL(blob);
    
    // Imposta l'attributo 'href' del link con l'URL temporaneo
    // L'attributo 'download' (che hai già nell'HTML) gestirà il nome del file
    linkScarica.href = url;
    
    // Nota importante: il browser gestirà automaticamente il download a questo punto
    // grazie al fatto che abbiamo impostato href e download prima che l'azione di default del click avvenga.

    // Opzionale, ma consigliato: rilascia l'URL dell'oggetto dopo un breve ritardo
    // per liberare memoria. Visto che il browser inizia subito il download, 
    // un timeout breve è sicuro.
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000); // Rilascia l'URL dopo 1 secondo
    localStorage.clear();
});*/
function download(){
    const stringaJson = localStorage.getItem(1); 
    const blob = new Blob([stringaJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    linkScarica.href = url;
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000); // Rilascia l'URL dopo 1 secondo
    localStorage.clear();
}