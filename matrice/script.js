let a;
let index =0;
let matrice=[];
let arr=[];
const table = document.getElementById("demo");

function cambiaGrandezza(){
    eliminaTabella();
    if(document.getElementById("numeropari").value > 2 && document.getElementById("numeropari").value % 2 == 0){
        a = document.getElementById("numeropari").value;
    }else if(document.getElementById("numeropari").value <4){
        a=4;
    }else{
        a = document.getElementById("numeropari").value-1;
    }
    genera(a,matrice);
    generaTabella();
}

function genera(a,matrice){
    matrice=new Array(a)
    for(let i=0;i<a;i++){
        matrice[i] = new Array(matrice.length);
        for(let j=0;j<a;j++){
            matrice[i][j] = parseInt( Math.random()*100);
        }
    }
}

function eliminaTabella(){
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
}

function generaTabella(){
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
}

function dividiInArray(a,l,arr){
    let array=[]
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if(j != b-1 && j != 0){
                if(j != b-1 && i == a && i == b-1 || j != 0 && i == a && i == b-1){
                    array.push(matrice[i][j]);
                }else {
                    arr=dividiInArray(a+1,l-2,arr);
                }
            }else{
                array.push(matrice[i][j]);
            }
        }
    }
    return arr.push(array);
}
console.log(dividiInArray(0,a,arr));

function inserisci(){
    let indice = 0
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            document.getElementById('e' + indice).innerHTML = matrice[i][j];
            indice++
        }
    }
}

function mettiModifice(a,l,mod){
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if(j != b-1 && j != 0){
                if(j != b-1 && i == a && i == b-1 || j != 0 && i == a && i == b-1){
                    matrice[i][j]=mod[l-i][j];
                }else {
                    mettiModifice(a+1,l-2,mod);
                }
            }else{
                matrice[i][j]=mod[l-i][j];
            }
        }
    }
}

function giraSinistra(){
    let mat = dividiInArray(0,a,arr);

    for (let i=0 ;i<mat.length;i++){
        if (i%2==0)
            mat[i].unshift(mat[i].pop());
        else
            mat[i].push(mat[i].shift());
    }

    mettiModifice(0,a,mat);

    inserisci();

}

function giraDestra(){
    let mat = dividiInArray(0,a,arr);

    for (let i=0 ;i<mat.length;i++){
        if (i%2==0)
            mat[i].push(mat[i].shift());
        else
            mat[i].unshift(mat[i].pop());
    }

    mettiModifice(0,a,mat);

    inserisci();

}