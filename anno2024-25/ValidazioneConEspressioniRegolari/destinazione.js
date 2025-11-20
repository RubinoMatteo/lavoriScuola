document.getElementById('nome').innerText = localStorage.getItem('nom');
document.getElementById('cognome').innerText = localStorage.getItem('cognom');
document.getElementById('comune').innerText = localStorage.getItem('com');
document.getElementById('cap').innerText = localStorage.getItem('c');
document.getElementById('telefono').innerText = localStorage.getItem('tel');
document.getElementById('codice').innerText = localStorage.getItem('CF');
document.getElementById('email').innerText = localStorage.getItem('em');


document.getElementById('password').innerText = localStorage.getItem('pwd');
/*document.getElementById('conferma').innerText = localStorage.getItem('con');*/
function indietro(){
    window.location.href = "https://rubinomatteo.github.io/lavoriScuola/anno2024-25/ValidazioneConEspressioniRegolari";
}