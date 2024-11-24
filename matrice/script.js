let a =4;
let index =0;
const matrice=new Array(a);
/*function creaTabella(){
    if(document.getElementById("numeropari").value > 2 && document.getElementById("numeropari").value % 2 == 0){
        a = document.getElementById("numeropari").value;
    }else if(document.getElementById("numeropari").value <4){
        a=4;
    }else{
        a = document.getElementById("numeropari").value-1;
    }*/
    //matrice = new Array(a);
    for(let i=0;i<a;i++){
        matrice[i] = new Array(matrice.length);
        for(let j=0;j<a;j++){
            let array = matrice[i];
            array[j] = parseInt( Math.random()*100);
        }
    }
    const table = document.getElementById("demo");

    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

    matrice.forEach(element =>{
        const riga = document.createElement("tr");
        Object.keys(element).forEach(elemento => {
            const colonna = document.createElement("td");
            colonna.id= "e"+index;
            const testo = document.createTextNode(element[elemento]);
            colonna.appendChild(testo);
            riga.appendChild(colonna);
            index++;
        })
        table.appendChild(riga);
    })
//}
function giraDestra(){
    let girafuori=[matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
matrice[1][3],matrice[2][3],
matrice[3][0],matrice[3][1],matrice[3][2],matrice[3][3],
matrice[2][0],matrice[1][0]];
    let salvami = girafuori[0];
    girafuori.shift();
    girafuori.push(salvami);
    let giradentro=[matrice[1][1],matrice[1][2],matrice[2][1],matrice[2][2]];
    let salvami2 = girafuori[0];
    giradentro.unshift(salvami2);
    for(let i=1;i<16;i++){
        if(i==6 && i==7){
            document.getElementById("e"+i).innerHTML=giradentro[i-6]
        }
        else if(i==10 && i==11){
            document.getElementById("e"+i).innerHTML=giradentro[i-8]
        }
    }
    document.getElementById("e0").innerHTML=girafuori[0]
    document.getElementById("e1").innerHTML=girafuori[1]
    document.getElementById("e2").innerHTML=girafuori[2]
    document.getElementById("e3").innerHTML=girafuori[3]

    document.getElementById("e7").innerHTML=girafuori[4]
    document.getElementById("e11").innerHTML=girafuori[5]

    document.getElementById("e15").innerHTML=girafuori[6]
    document.getElementById("e14").innerHTML=girafuori[7]
    document.getElementById("e13").innerHTML=girafuori[8]
    document.getElementById("e12").innerHTML=girafuori[9]

    document.getElementById("e8").innerHTML=girafuori[10]
    document.getElementById("e4").innerHTML=girafuori[11]

}
function giraSinistra(){
    let girafuori=[matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
    matrice[1][3],matrice[2][3],
    matrice[3][0],matrice[3][1],matrice[3][2],matrice[3][3],
    matrice[2][0],matrice[1][0]];
        let salvami = girafuori[0];
        girafuori.unshift(salvami);
        let giradentro=[matrice[1][1],matrice[1][2],matrice[2][1],matrice[2][2]];
        let salvami2 = girafuori[0];
        giradentro.shift();
        giradentro.push(salvami);
        for(let i=1;i<16;i++){
            if(i==6 && i==7){
                document.getElementById("e"+i).innerHTML=giradentro[i-6]
            }
            else if(i==10 && i==11){
                document.getElementById("e"+i).innerHTML=giradentro[i-8]
            }
        }
        document.getElementById("e0").innerHTML=girafuori[0]
        document.getElementById("e1").innerHTML=girafuori[1]
        document.getElementById("e2").innerHTML=girafuori[2]
        document.getElementById("e3").innerHTML=girafuori[3]
    
        document.getElementById("e7").innerHTML=girafuori[4]
        document.getElementById("e11").innerHTML=girafuori[5]
    
        document.getElementById("e12").innerHTML=girafuori[6]
        document.getElementById("e13").innerHTML=girafuori[7]
        document.getElementById("e14").innerHTML=girafuori[8]
        document.getElementById("e15").innerHTML=girafuori[9]

        document.getElementById("e4").innerHTML=girafuori[10]
        document.getElementById("e8").innerHTML=girafuori[11]
}