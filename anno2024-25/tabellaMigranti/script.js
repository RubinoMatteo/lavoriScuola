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
    let colonne=[]
    let colonne1=[]
    for (let i = 0; i < righe.length; i++) {
        colonne[i] = righe[i].split(',')
    }
    for (let i = 0; i < colonne.length; i++) {
        for (let j = 0; j < colonne[i].length; j++) {
        	colonne1[2*i+j] = colonne[i][j].replaceAll('"','')
    	}
    }
    for (let i = 0; i < colonne1.length; i++) {
	if (i%2==0){
            document.getElementById("demo").innerHTML += "<tr><td>" + colonne1[i] + "</td><td>" + colonne1[i+1] + "</td></tr>";
	}
    }
}

