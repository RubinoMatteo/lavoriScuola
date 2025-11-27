array=[];
sessionStorage.getItem(1) !== null? array=JSON.parse(sessionStorage.getItem(1)) : array[0]={name:"nome",memory:"memoria",OS:"Sistema Operativo"};
sessionStorage.setItem(1, JSON.stringify(array, null, 2));
function samsung(){
    sessionStorage.setItem(0, "samsung");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function apple(){
    sessionStorage.setItem(0, "apple");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}
function huawei(){
    sessionStorage.setItem(0, "huawei");
    location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2025-26/anagrafica3.0/pagina2/index.html";
}

function vediCarrello(){
}