switch(localStorage.getItem(0)) {
  case samsung:
    samsung();
    break;
  case apple:
    apple();
    break;
    case hauawei:
    hauawei();
    break;
  default:
    errore();
}
function samsung(){
    var stampa = "";
const section = document.getElementById("demo") ;
xmlhttp.open("GET", "samsung.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (x in myObj.elenco) 
                stampa += `<div class="card"><h3>${myObj.samsung[x].name}</h3><p>${myObj.samsung[x].memory}</p><p>${myObj.samsung[x].os}</p><img src="${myObj.samsung[x].image}" alt="samsung"></div>`;
            document.getElementById("demo").innerHTML = `${stampa}`;
            stampa="";
        }
    };
/*<div class="card">
                    <h3>samsung</h3>
                    <a target="_blank" class="button" onclick="samsung()" >Visualizza &rarr;</a>
                </div>*/
};
function apple(){
    var stampa = "";
    const section = document.getElementById("demo") ;
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
                stampa+=`<div class="card"><h3>${name}</h3><p>${memory}</p><p>${os}</p><img src="${image}" alt="iPhone"></div>`;
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
function hauawei(){
/*<div class="card">
                    <h3>samsung</h3>
                    <a target="_blank" class="button" onclick="samsung()" >Visualizza &rarr;</a>
                </div>*/
};
function errore(){
    document.getElementById("demo").innerHTML = `<h1>error 404</h1><br><p>pagina non trovata</p>`;
};