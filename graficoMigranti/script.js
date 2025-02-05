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
            anno.push(tab[i])
            num.push(Number(tab[i+1]))
        }
    }
            console.log(anno)
            console.log(num)
    let massimo= massi(num);
            console.log(massimo)
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

	  ctx.font = "10px Arial";
            ctx.fillStyle = "red";
            ctx.fillText('0',40,465);
    // Set an end-point
    max=Math.round(massimo/1000)*1000;
    w=950
    h=450
    Ux=w/(anno.length+1)
    Uy=410/max
console.log(Ux+';'+Uy)
    for (let i =0;i<anno.length;i++){
        ctx.moveTo(w/(anno.length+1)*i+50+w/anno.length,h);
        ctx.lineTo(w/(anno.length+1)*i+50+w/anno.length,h+10);
        ctx.font = "10px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(anno[i],w/(anno.length+1)*i+50+w/anno.length-12,h+18);//w/10*(i+1)-3
    }
    for (let i =1;i<11;i++){
        ctx.moveTo(50,h/11*i);
            ctx.lineTo(40,h/11*i);
            ctx.font = "10px Arial";
            ctx.fillStyle = "red";
            ctx.fillText(max/10*(11-i),15,h/11*i-3);
        }

	X=50;
	Y=450;
	ctx.moveTo(X,Y);
for (let i =0;i<num.length;i++){
	X+=Ux
	Y=450-parseInt(num[i]*Uy);
            console.log(X+','+Y)
	ctx.lineTo(X,Y);
}
    // Draw it
    ctx.stroke();
}
function massi(num){
        let max=num[0]
        for(let i = 1;i<num.length;i++){
            if(num[i]>max){
                max=num[i]
            }
        }
        return max
    }