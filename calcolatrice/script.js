const un =["","",""];
let i=0;
    function scrivi(p1){
	if(un[0]==''){
	document.getElementById("testo").innerHTML  = ' ' ;
	i=0;}
	if(p1==('c')){
	document.getElementById("testo").innerHTML  = ' ' ;
	un[0]='';
	un[1]='';
	un[2]='';
	i=0;
	}else{
    	document.getElementById("testo").innerHTML  += p1 ;
	
	if(p1 == '+' || p1 == '-' || p1 == '/' || p1 == '*'){
	un[1]+=p1;
	i+=2;
	}else{
	un[i]+=p1;}
	}

    }
    function operazione(p1){
    let ris;
	switch(un[1]) {
  		case '+':
    			ris=parseFloat(un[0])+ parseFloat(un[2]);
   			break;
  		case '-':
    			ris=parseFloat(un[0])- parseFloat(un[2]);
    			break;
  		case '*':
    			ris=parseFloat(un[0])*parseFloat(un[2]);
    			break;
  		case '/':
    			ris=parseFloat(un[0])/parseFloat(un[2]);
    			break;
  		default:
    			ris='error';}
	un[0]='';
	un[1]='';
	un[2]='';
	document.getElementById("testo").innerHTML  = ris ;
    }