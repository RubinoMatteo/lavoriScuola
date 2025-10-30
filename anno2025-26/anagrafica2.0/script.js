
var x = 0;

var stampa = "";
var stampa2 = "";
var stampa3 = "";
var stampa4 = "";

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "elenco.xml", true);

xmlhttp.send();

xmlhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var xmlDoc = this.responseXML;
        var persone = xmlDoc.getElementsByTagName("persona");

        for (x = 0; x < persone.length; x++) {
            var nome = persone[x].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            var cognome = persone[x].getElementsByTagName("cognome")[0].childNodes[0].nodeValue;
            var anni = persone[x].getElementsByTagName("anni")[0].childNodes[0].nodeValue;
            var DN = persone[x].getElementsByTagName("DN")[0].childNodes[0].nodeValue;
            
            stampa += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${DN} </td></tr>`;
        }

        document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di Nascita </th></tr> ${stampa}`;
        stampa = "";

    }

};

function inizio(){
    xmlhttp.open("GET", "elenco.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].childNodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].childNodes[0].nodeValue;
                var DN = persone[x].getElementsByTagName("DN")[0].childNodes[0].nodeValue;
                
                stampa += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${DN} </td></tr>`;
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di Nascita </th></tr> ${stampa}`;
            stampa = "";
        }
    };
}

function ricercaEta() {
    var minEta = document.getElementById("anni").value;
    document.getElementById("anni").value = "";
    xmlhttp.open("GET", "elenco.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var cognome = persone[x].getElementsByTagName("cognome")[0].childNodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].childNodes[0].nodeValue;
                
                if (anni >= minEta) {
                    stampa2 += `<tr><td> ${cognome} </td><td> ${anni} </td></tr>`;
                }
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> cognome </th><th> anni </th></tr> ${stampa2}`;
            stampa2 = "";
        }
    };
}

function ricercaIniziale() {
    if(document.getElementById("iniziale").value.length > 1){
        var iniziale = document.getElementById("iniziale").value.charAt(0).toUpperCase() + document.getElementById("iniziale").value.slice(1);
        document.getElementById("iniziale").value = "";
    }else{
        var iniziale = document.getElementById("iniziale").value.charAt(0).toUpperCase();
        document.getElementById("iniziale").value = "";
    }
    xmlhttp.open("GET", "elenco.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].childNodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].childNodes[0].nodeValue;
                var DN = persone[x].getElementsByTagName("DN")[0].childNodes[0].nodeValue;
                
                if (cognome.startsWith(iniziale)) {
                    stampa3 += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${DN} </td></tr>`;
                }
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di Nascita </th></tr> ${stampa3}`;
            stampa3 = "";
        }   
    };
}

function generazione() {
    var iniziale = document.getElementById("iniziale").value;
    xmlhttp.open("GET", "elenco.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var persone = xmlDoc.getElementsByTagName("persona");

            for (x = 0; x < persone.length; x++) {
                var nome = persone[x].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
                var cognome = persone[x].getElementsByTagName("cognome")[0].childNodes[0].nodeValue;
                var anni = persone[x].getElementsByTagName("anni")[0].childNodes[0].nodeValue;
                var DN = persone[x].getElementsByTagName("DN")[0].childNodes[0].nodeValue;
                
                stampa4 += `<tr><td> ${nome} </td><td> ${cognome} </td><td> ${anni} </td><td> ${DN} </td>`;
                
                if(DN >= 2013)
                    stampa4 += `<td> Generazione Alpha </td></tr>`;
                else if (DN >= 1997) {
                    stampa4 += `<td> Generazione Z </td></tr>`;
                } else if(DN >= 1981)
                    stampa4 += `<td> Millenials </td></tr>`;
                else if (DN >= 1965) {
                    stampa4 += `<td> Generazione X </td></tr>`;
                } else if(DN >= 1946)
                    stampa4 += `<td> Baby Boomers </td></tr>`;
                else if (DN >= 1928) {
                    stampa4 += `<td> Generazione Silenziosa </td></tr>`;
                } else
                    stampa4 += `<td> Greatest Generation </td></tr>`;
            }
            
            document.getElementById("demo").innerHTML = `<tr><th> nome </th><th> cognome </th><th> anni </th><th> Data di Nascita </th><th> generazione </th></tr> ${stampa4}`;
            stampa4 = "";
        }
    };
}

/*  Greatest Generation (1901-1927)
    Generazione Silenziosa (1928-1945)
    Baby Boomers  (1946-1964)
    Generazione X  (1965-1980)
    Millenials  (1981-1996)
    Generazione Z (1997-2012) 
    Generazione Alpha (dal 2013 in poi)*/