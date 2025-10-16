const un =["","","",""];
let i=0;
let riss;
 function scrivi(p1){
if(p1 == '+' || p1 == '-' || p1 == '/' || p1 == '*'){
	if(un[0] == ''){
		un[0]= un[3];
	}
	document.getElementById("testo").innerHTML  = un[0];
	un[1]='';
	un[1]+=p1;
	i=2;
}
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
	un[i]+=p1;
	if(p1 == '+' || p1 == '-' || p1 == '/' || p1 == '*'){

		un.pop();
		un[i]='';
	}
	console.log(un[0] + "  z");
	console.log(un[1]) + "  u";
	console.log(un[2]) + "  d";
	if(un[0] == ""){
		//un[0]=un[3];
	}else{
		switch(un[1]) {
			  case '+':
					un[3]=parseFloat(un[0])+ parseFloat(un[2]);
				   break;
			  case '-':
				un[3]=parseFloat(un[0])- parseFloat(un[2]);
					break;
			  case '*':
				un[3]=parseFloat(un[0])*parseFloat(un[2]);
					break;
			  case '/':
				un[3]=parseFloat(un[0])/parseFloat(un[2]);
					break;
			}
	}
	console.log(un[3] + "  t");
}
}
function operazione(){
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


	