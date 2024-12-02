function converti(){
    var testo = document.getElementById('d1').value;
    var B=0;
    var O=0;
    var E=0;
    for(let i =0;i < testo.length;i++){
        if (testo[i]<2) {
            B++;
        }else if(testo[i]>1&&testo[i]<8){
            O++;
        }else{
            E++;
        }
    }
    if(B>O&&B>E){
        binario();
        //document.getElementById("risultato").value = parseInt(testo,2);
    }else if(O>E&&O>B) {
        ottale();
        //document.getElementById("risultato").value = parseInt(testo,8);
    }else{
        esadecimale();
        //document.getElementById("risultato").value = parseInt(testo,2).toString(16);
    }
}

function binario () {
var x = document.getElementById("d1").value;
var risultato = document.getElementById("risultato")
let ris =0
for (let i =1;i<=x.length;i++){
    console.log(parseFloat(x.charAt(x.length-i)));
    ris+=(parseFloat(x.charAt(x.length-i)))*Math.pow(2,i);
}
console.log(ris);
risultato.value=ris;
}

function ottale (){

var x = document.getElementById("d1").value;
var risultato = document.getElementById("risultato")
let ris =0;
for(let i =1;i<=x.length;i++){
    console.log(parseFloat(x.charAt(x.length-i)));
    ris+=(parseFloat(x.charAt(x.length-i)))*Math.pow(8,i);
}
console.log(ris);
risultato.value = ris;
}

function esadecimale (){  
var x = document.getElementById("d1").value;
var risultato = document.getElementById("risultato");
let ris =0;
let cifra =0;
x=x.toUpperCase();
for(let i=1;i<=x.length;i++){
 switch(x.charAt(x.length-i)) {
   case "A":
       cifra=10;
       break;
   case "B":
       cifra=11;
       break;
 case "C":
       cifra=12;
       break;
   case "D":
       cifra=13;
       break;
case "E":
       cifra=14;
       break;
   case "F":
       cifra=15;
       break;
   default:
       cifra = parseFloat(x.charAt(x.length-i));
}
console.log(cifra);
ris+=cifra*Math.pow(16,i); 
}
console.log(ris);
     
risultato.value = ris;
}
