const matrice=[];
function bottone()
{
matrice[0]= document.getElementById("nome").value;
matrice[1]= document.getElementById("cognome").value;
matrice[2]= document.getElementById("indirizzo").value;
matrice[3]= document.getElementById("città").value;
document.getElementById("nome").value="";
document.getElementById("cognome").value="";
document.getElementById("città").value="";
document.getElementById("indirizzo").value="";
document.getElementById("demo").innerHTML += "<tr><td>" + matrice[0] + "</td><td>" + matrice[1] + "</td><td>" + matrice[2] + "</td><td>" + matrice[3] + "</td></tr>";
}