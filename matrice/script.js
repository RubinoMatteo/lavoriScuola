let a =4;
let index =0;
let matrice=new Array(a);
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
            matrice[i][j] = parseInt( Math.random()*100);
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
function inserisci(){
    let indice = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            document.getElementById('e' + indice).innerText = matrice[i][j]
            indice++
        }
    }
}

function giraSinistra(){
    let girafuori=[
        matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
        matrice[1][3],matrice[2][3],
        matrice[3][3],matrice[3][2],matrice[3][1],matrice[3][0],
        matrice[2][0],matrice[1][0]
    ];

    girafuori.push(girafuori.shift());

    [matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
    matrice[1][3],matrice[2][3],
    matrice[3][3],matrice[3][2],matrice[3][1],matrice[3][0],
    matrice[2][0],matrice[1][0]] = girafuori;

    let giradentro=[matrice[1][1],matrice[1][2],matrice[2][2],matrice[2][1]];

    giradentro.unshift(giradentro.pop());

    [matrice[1][1],matrice[1][2],matrice[2][2],matrice[2][1]] = giradentro;

    inserisci();

}
function giraDestra(){
    let girafuori=[
        matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
        matrice[1][3],matrice[2][3],
        matrice[3][3],matrice[3][2],matrice[3][1],matrice[3][0],
        matrice[2][0],matrice[1][0]
    ];

        girafuori.unshift(girafuori.pop());

        [matrice[0][0],matrice[0][1],matrice[0][2],matrice[0][3],
        matrice[1][3],matrice[2][3],
        matrice[3][3],matrice[3][2],matrice[3][1],matrice[3][0],
        matrice[2][0],matrice[1][0]] = girafuori;

        let giradentro=[matrice[1][1],matrice[1][2],matrice[2][2],matrice[2][1]];

        giradentro.push(giradentro.shift());

        [matrice[1][1],matrice[1][2],matrice[2][2],matrice[2][1]] = giradentro;

        inserisci();
    
}