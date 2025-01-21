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
    console.log(contenuto)
    }
}
function creaTab(tab){
    let righe= tab.split("\n")
    let colonne=[]
    let colonne1=[]
    /*for (let i = 0; i < righe.length*2; i+2) {
        for (let j = 0; j < righe.length; j++) {
        colonne[i] = righe[j].split(',')[0]
        colonne[i+1] = righe[j].split(',')[1]}
    }
    for (let i = 0; i < colonne.length; i++) {
        colonne1[i] = colonne[i].slice(1,-1)
    }
    for (let i = 0; i < colonne.length; i++) {
        if(i%2==0){
            document.getElementById("demo").innerHTML += "<tr><td>" + colonne1[i] + "</td><td>" + colonne1[i+1] + "</td></tr>";
        }
    }*/
    for (let i = 0; i < righe.length; i++) {
        colonne[i] = righe[i].split(',')
    }
    for (let i = 0; i < colonne.length; i++) {
        for (let j = 0; j < colonne[i].length; j++) {
        colonne1[i][j] = colonne[i][j].slice(1,-1)
    }
    for (let i = 0; i < colonne.length; i++) {
            document.getElementById("demo").innerHTML += "<tr><td>" + colonne1[i][0] + "</td><td>" + colonne1[i][1] + "</td></tr>";
    }
    console.log(colonne1)
    console.log(colonne)
    console.log(righe)
}