let a;
let matrice;
function creaTabella(){
    if(document.getElementById("numeropari").value > 2 && document.getElementById("numeropari").value % 2 == 0){
        a = document.getElementById("numeropari").value;
    }else{
        a=4;
    }
    matrice = new Array(a);
    for(let i=0;i<a;i++){
        matrice[i] = new Array(matrice.length);
        for(let j=0;j<a;j++){
            let array = matrice[i];
            array[j] = parseInt( Math.random()*100);
        }
    }
    const table = document.getElementById("demo");
    matrice.forEach(element =>{
        const riga = document.createElement("tr");
        Object.keys(element).forEach(elemento => {
            const colonna = document.createElement("td");
            const testo = document.createTextNode(element[elemento]);
            colonna.appendChild(testo);
            riga.appendChild(colonna);
        })
        table.appendChild(riga);
    })
}
function giraDestra(num){
    for(let i=1;i<num;i++){
        for(let j=0;j<num;j++){

        }
    }

}
function giraSinistra(){
    
}