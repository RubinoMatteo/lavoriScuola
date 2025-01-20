const coda={};
function inserisci()
{
coda.unshift( {nome: document.getElementById("nome").value ,
    cognome: document.getElementById("cognome").value});
document.getElementById("nome").value="";
document.getElementById("cognome").value="";
}
function preleva()
{
    let coda2=coda.reverse();
    let uscito =coda2.shift();
    document.getElementById("text").innerHTML  = uscito.nome +"," +uscito.cognome;
    coda.pop();
}