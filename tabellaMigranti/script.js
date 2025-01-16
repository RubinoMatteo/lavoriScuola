const matrice=[];
function bottone()
{
matrice[0]= document.getElementById("anno").value;
matrice[1]= document.getElementById("numero").value;
document.getElementById("anno").value="";
document.getElementById("numero").value="";
document.getElementById("demo").innerHTML += "<tr><td>" + matrice[0] + "</td><td>" + matrice[1] + "</td></tr>";
}