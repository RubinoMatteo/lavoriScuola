const coda=[];
function inserisci(){
coda.unshift({nome: document.getElementById("nome").value ,
		cognome: document.getElementById("cognome").value});
document.getElementById("nome").value="";
document.getElementById("cognome").value="";
}
function preleva(){
if (coda.length>0){

    let coda2=coda.reverse();
    let uscito =coda2.shift();
    document.getElementById("testo").value  = uscito.nome+','+uscito.cognome ;
coda2=coda2.reverse();
}else{
	document.getElementById("testo").value  = 'CODA VUOTA' ;
}
}
