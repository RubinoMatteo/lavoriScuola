
var x = 0;

var stampa = "";
var stampa2 = "";
var stampa3 = "";
var stampa4 = "";

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "elenco.json", true);

xmlhttp.send();

xmlhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var myObj = JSON.parse(this.responseText);

        for (x in myObj.elenco) {

            stampa += "<tr>" + "<td>" + myObj.elenco[x].nome + "</td>" + "<td>" + myObj.elenco[x].cognome + "</td>" + "<td>" + myObj.elenco[x].anni + "</td>" + "<td>" + myObj.elenco[x].DN + "</td>" + "</tr>";

        }

        document.getElementById("demo").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cocgnome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "</tr>" + stampa;

    }

};

function ricercaEta() {
    var minEta= document.getElementById("anni").value;
    xmlhttp.open("GET", "elenco.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (x in myObj.elenco) {
                if (myObj.elenco[x].anni >= minEta) {
                    stampa2 += "<tr>" + "<td>" + myObj.elenco[x].cognome + "</td>" + "<td>" + myObj.elenco[x].anni + "</td>" + "</tr>";
                }
            }
            document.getElementById("demo").innerHTML = "<tr>" + "<th>" + "cocgnome" + "</th>" + "<th>" + "anni" + "</th>" + "</tr>" + stampa2;
        }
    };
}

function ricercaIniziale() {
    var iniziale= document.getElementById("iniziale").value.toUpperCase();
    xmlhttp.open("GET", "elenco.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
                for (x in myObj.elenco) {
                    if (myObj.elenco[x].cognome.charAt(0) == iniziale) {
                        stampa3 += "<tr>" + "<td>" + myObj.elenco[x].nome + "</td>" + "<td>" + myObj.elenco[x].cognome + "</td>" + "<td>" + myObj.elenco[x].anni + "</td>" + "<td>" + myObj.elenco[x].DN + "</td>" + "</tr>";
                    }
                }
            document.getElementById("demo").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cocgnome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "</tr>" + stampa3;
        }   
    };
}

function generazione() {
    var iniziale= document.getElementById("iniziale").value;
    xmlhttp.open("GET", "elenco.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for (x in myObj.elenco) {
            stampa3 += "<tr>" + "<td>" + myObj.elenco[x].nome + "</td>" + "<td>" + myObj.elenco[x].cognome + "</td>" + "<td>" + myObj.elenco[x].anni + "</td>" + "<td>" + myObj.elenco[x].DN + "</td>";
            if(myObj.elenco.DN >= 2013)
                stampa3 +="<td>" + "Generazione Alpha" + "</td>" + "</tr>";
            else if (myObj.elenco.DN >= 1997) {
                stampa3 +="<td>" + "Generazione Z" + "</td>" + "</tr>";
            } else if(myObj.elenco.DN >= 1981)
                stampa3 +="<td>" + "Millenials" + "</td>" + "</tr>";
            else if (myObj.elenco.DN >= 1965) {
                stampa3 +="<td>" + "Generazione X" + "</td>" + "</tr>";
            } else if(myObj.elenco.DN >= 1946)
                stampa3 +="<td>" + "Baby Boomers" + "</td>" + "</tr>";
            else if (myObj.elenco.DN >= 1928) {
                stampa3 +="<td>" + "Generazione Silenziosa" + "</td>" + "</tr>";
            } else
                stampa3 +="<td>" + "Greatest Generation" + "</td>" + "</tr>";
        }
        document.getElementById("demo").innerHTML = "<tr>" + "<th>" + "nome" + "</th>" + "<th>" + "cocgnome" + "</th>" + "<th>" + "anni" + "</th>" + "<th>" + "Data di Nascita" + "</th>" + "<th>" + "generazione" + "</th>" + "</tr>" + stampa4;
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