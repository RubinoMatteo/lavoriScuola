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
    creaGraf(colonne1);
}
function creaGraf(tab){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let anno =[]
    let num=[]
    for (let i = 2; i < tab.length; i++) {
        if (i%2==0){
            anno+=tab[i]
            console.log(anno)
            num+=tab[i+1]
            console.log(num)
        }
    }
    let massimo= function(num){
        let max=num[0]
        for(let i = 1;i<num.length;i++){
            if(max<num[i]){
                max=num[i]
            }
        }
        return max
    }
    ctx.beginPath();

    // Set a start-point
    ctx.moveTo(50,500);

    // Set an end-point
    ctx.lineTo(50,0);
    // Set a start-point
    ctx.moveTo(1000,450);

    // Set an end-point
    ctx.lineTo(0,450);
    // Set a start-point
    ctx.moveTo(40,50);

    // Set an end-point
    max=Math.round(massimo/1000)*1000;
    for (let i =0;i<num.length;i++){

        ctx.lineTo(max/10*i,50);
        ctx.font = "7px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(max/10*i,25,45);
    }
    // Draw it
    ctx.stroke();
}
