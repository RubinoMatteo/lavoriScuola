function valida() {
// Variabili associate ai campi del modulo
      
   var nome = document.maschera.nome.value;
   var cognome = document.maschera.cognome.value;
   var comune = document.maschera.comune.value;
   var cap = document.maschera.cap.value;
   var telefono = document.maschera.telefono.value;
   var codice = document.maschera.codice.value;
   var email = document.maschera.email.value;
   var password = document.maschera.password.value;
   var conferma= document.maschera.conferma.value;
   var test1= true;
   var test2= true;
   var test3= true;
   var test4= true;
   var test5= true;
   var test6= true;
   var test7= true;
   var test8= true;
   var test9= true;
   var test10= true;
   
   

var espr_vali = /^([a-zA-Z])+$/; 
if (!espr_vali.test(nome)) 
  { 
      alert("Devi inserire un nome valido - stringa formata di sole lettere");
      document.maschera.nome.focus();    
      test1= false; 
   }
if (!espr_vali.test(cognome))
  { 
      alert("Devi inserire un cognome valido -  stringa formata di sole lettere");
      document.maschera.cognome.focus();
      test2= false; 
   }
  if (!espr_vali.test(comune))
  { 
      alert("Devi inserire un comune valido - stringa formata di sole lettere");
      document.maschera.comune.focus();
      test3 = false; 
   }
var espr_vali2 = /^([0-9]{5})+$/; 
if (!espr_vali2.test(cap))
  { 
      alert("Devi inserire un cap valido - stringa formata di soli  5 caratteri nmerici");
      document.maschera.cap.focus();
      test4 = false; 
   }
var espr_vali2a = /^([0-9]{7,})+$/; 
if (!espr_vali2a.test(telefono))
  { 
      alert("Devi inserire un numero telefonico valido - stringa formata di almeno  7 caratteri numerici");
      document.maschera.telefono.focus();
      test5 = false; 
   }

var espr_valiCF = /^([A-Z]{6})+([0-9]{2})+([ABCDEHLMPRST]{1})+([0-9]{2})+([A-Z]{1})+([0-9]{3})+([A-Z]{1})+$/; 
     
   if (!espr_valiCF.test(codice) || (codice == "") || (codice == "undefined")) 
   {
      alert("Devi inserire un codice fiscale corretto - non controllo se coerente con i dati precedenti");
      document.maschera.codice.focus();
      test6 =false;
       
   }
   
   var espr_vali3 = /^([a-zA-Z])+([a-zA-Z0-9_.-])+([@])(([a-zA-Z]{2,}))+([.])([a-zA-Z]{2,})+$/; 
     
   if (!espr_vali3.test(email) || (email == "") || (email == "undefined")) 
   {
      alert("Devi inserire un indirizzo mail corretto");
      document.maschera.email.focus();
      test7 =false;
       
   }
  if (password.length < 8 || (password == "") || (password == "undefined") ) 
   {
    alert("Scegli una password lunga almeno 8 caratteri");
    document.maschera.password.focus();
    test8 =false;
    
   }
   if ((conferma == "") || (conferma == "undefined")) {
      alert("Devi confermare la password");
      document.maschera.conferma.focus();
      test9 = false;
       
    }
    if (password != conferma) {
       alert("La conferma password è diversa");
       document.maschera.conferma.value = "";
       document.maschera.conferma.focus();
       test10 = false;
       
    }
  if(test1 && test2 && test3 && test4 && test5 && test6 && test7 && test8 && test9 &&test10){

   localStorage.setItem("nom", nome);
   localStorage.setItem("cognom", cognome);
   localStorage.setItem("com", comune);
   localStorage.setItem("c", cap);
   localStorage.setItem("tel", telefono);
   localStorage.setItem("CF", codice);
   localStorage.setItem("em", email);
   localStorage.setItem("pwd", password);
   localStorage.setItem("con", conferma);
}
    return test1 && test2 && test3 && test4 && test5 && test6 && test7 && test8 && test9 && test10
      
   
}
