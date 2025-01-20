/*const matrice=[];
function bottone()
{
matrice[0]= document.getElementById("anno").value;
matrice[1]= document.getElementById("numero").value;
document.getElementById("anno").value="";
document.getElementById("numero").value="";
document.getElementById("demo").innerHTML += "<tr><td>" + matrice[0] + "</td><td>" + matrice[1] + "</td></tr>";
}*/
function leggiFile(input){

    let file = input.files[0] //presa in input del file
    let lettoreF = new FileReader() //creazione oggetto filereader
    lettoreF.readAsText(file);
    
    lettoreF.onload = function() {
    let contenuto = lettoreF.result; // Contenuto del file letto
    creaTab(contenuto);
    }
}
function creaTab(tab){
    let righe= tab.split("\n")
    for (let i = 0; i < righe.length; i++) {
        const colonne = righe[i].split(',')
    }
    for (let i = 0; i < colonne.length; i++) {
        const colonne1 = colonne[i].slice(1,-1)
    }
    for (let i = 0; i < colonne.length; i++) {
        ocument.getElementById("demo").innerHTML += "<tr><td>" + colonne[0] + "</td><td>" + matrice[1] + "</td></tr>";
    }
}