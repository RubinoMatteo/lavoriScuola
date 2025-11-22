array=[];
array[0]= localStorage.getItem(1) !== null? JSON.parse(localStorage.getItem(1)) : {name:"nome",memory:"memoria",OS:"Sistema Operativo"};
localStorage.setItem(1, JSON.stringify(array));
function samsung(){
    localStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function apple(){
    localStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function huawei(){
    localStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}