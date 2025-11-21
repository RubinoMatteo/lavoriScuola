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
                stampa += `<div class="card"><h3>${myObj.samsung[x].name}</h3><p>${myObj.samsung[x].memory}</p><p>${myObj.samsung[x].os}</p><img id="img" src="${myObj.samsung[x].image}" alt="samsung"> <a target="_blank" class="button" onclick="acquista(${myObj.samsung[x].name})" > &#128722; </a></div>`;
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
                stampa+=`<div class="card"><h3>${name}</h3><p>${memory}</p><p>${os}</p><img id="img" src="${image}" alt="iPhone"> <a target="_blank" class="button" onclick="acquista(${name})" > &#x1f6d2; </a></div> `;
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
    console.log(colonne);
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
            console.log(huawei);
            for (let i = 1; i < huawei.length; i++) {
                stampa+=`<div class="card"><h3>${huawei[i][0]}</h3><p>${huawei[i][1]}</p><p>${huawei[i][2]}</p><img id="img" src="${huawei[i][3]}" alt="iPhone"> <a target="_blank" class="button" onclick="acquista(${huawei[i][0]})" > &#x1f6d2; </a></div> `;
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
var array=[];
function acquista(nome){
    array+= nome;
};