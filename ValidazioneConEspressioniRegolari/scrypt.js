function valida() {
// Variabili associate ai campi del modulo
      
   var nome = document.maschera.nome.value;
   var cognome = document.maschera.cognome.value;
   var comune = document.maschera.comune.value;
   var cap = document.maschera.cap.value;
   var telefono = document.maschera.telefono.value;
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
   var test9 = true;
   localStorage.setItem("nom", nome);
   localStorage.setItem("cognom", cognome);
   localStorage.setItem("com", comune);
   localStorage.setItem("c", cap);
   localStorage.setItem("tel", telefono);
   localStorage.setItem("em", email);
   localStorage.setItem("pwd", password);
   localStorage.setItem("con", conferma);
   
   

// le espressioni regolari sono modelli di stringhe: esempio gli indirizzi di posta elettronica, il codice fiscale, il CAP 
//  hanno uno specifico formato
// Il metodo test restituisce valore true se la stringa, passata come parametro  è uguale al modello 
// dell'espressione regolare definita nella stringa su cui è chiamato il metodo.

var espr_vali = /^([a-zA-Z])+$/; // espressione regolare come modello di stringa che deve essere solo di lettere 

if (!espr_vali.test(nome)) //chiamata del metodo test per controllare che la stringa "nome" rispetti il modello definito in estr_vali
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
// espressione regolare come modello di stringa che deve essere esattamente di cinque caratteri numerici
if (!espr_vali2.test(cap))
  { 
      alert("Devi inserire un cap valido - stringa formata di soli  5 caratteri nmerici");
      document.maschera.cap.focus();
      test4 = false; 
   }
var espr_vali2a = /^([0-9]{7,})+$/; // espressione regolare come modello di stringa che deve essere almeno di cinque caratteri numerici
if (!espr_vali2a.test(telefono))
  { 
      alert("Devi inserire un numero telefonico valido - stringa formata di almeno  7 caratteri numerici");
      document.maschera.telefono.focus();
      test5 = false; 
   }


// espressione recolere come modello di stringa per il formato di indirizzo di posta elettronica
   var espr_vali3 = /^([a-zA-Z])+([a-zA-Z0-9_.-])+([@])(([a-zA-Z]{2,}))+([.])([a-zA-Z]{2,})+$/; 
   
	// la prima sottostringa può contenere solo lettere 
	// la seconda sottostriga può contenere lettere numeri e trattini e punto
	// poi c'è il solo carattere @
        // la terza sottostringa può contenere solo lettere e deve essere lunga almeno due caratteri
	// poi c'è il solo carattere .
	// la quarta sottostringa può contenere solo lettere e deve essere lunga almeno due caratteri

   // Il metodo test restituisce valore true se la stringa email è uguale al modello 
   // dell'espressione regolare definita nella stringa espr_valida
    
   if (!espr_vali3.test(email) || (email == "") || (email == "undefined")) 
   {
      alert("Devi inserire un indirizzo mail corretto");
      document.maschera.email.focus();
      test6 =false;
       
   }
  if (password.length < 8 || (password == "") || (password == "undefined") ) 
   {
    alert("Scegli una password lunga almeno 8 caratteri");
    document.maschera.password.focus();
    test7 =false;
    
   }
   //Effettua il controllo sul campo CONFERMA PASSWORD
   if ((conferma == "") || (conferma == "undefined")) {
      alert("Devi confermare la password");
      document.maschera.conferma.focus();
      test8 = false;
       
    }
    if (password != conferma) {
       alert("La conferma password è diversa");
       document.maschera.conferma.value = "";
       document.maschera.conferma.focus();
       test9 = false;
       
    }
  //la funzione restituirà valore true solo se tutti i test saranno true, quindi tutti i dati validi
    return test1 && test2 && test3 && test4 && test5 && test6 && test7 && test8 && test9
      
   
}
