function generaLLA(){
    let MAC = document.getElementById("MAC-Address").value;;
    let IPv6 = document.getElementById("IPv6").value;;
    if(MAC.length < 12||MAC.length > 17){
        alert("MAC address non valido ");
        MAC = "";
    }
    let i;
    let prima_parte;
    let seconda_parte;
    let Host;
    if (MAC.length == 17){
        let r = MAC.spilt(".");
        i = r.join("");
        prima_parte=i.slice(0,6)
        seconda_parte=i.slice(6,16)
        Host =prima_parte+"fffe"+seconda_parte;
        cambia = parseInt(r.slice(0,2).join(""),16);
        cambia = cambia.toString(2);
        if (cambia[6]===0){
            cambia[6]="1";
        }else{
            cambia[6]="0";
        }
        cambia = parseInt(cambia,2);
        cambia = cambia.toString(16);
        [Host[0],Host[1]]=cambia;
        host = Host.slice(0,4)+":"+ Host.slice(4,8)+":"+ Host.slice(8,12)+":"+ Host.slice(12,16);
        IPv6="fe80::"+host+" /64";
    }else{
        prima_parte=MAC.slice(0,6)
        seconda_parte=MAC.slice(6,16)
        Host =prima_parte+"fffe"+seconda_parte;
        cambia = parseInt(MAC.slice(0,2),16);
        cambia = cambia.toString(2);
        if (cambia[6]===0){
            cambia[6]="1";
        }else{
            cambia[6]="0";
        }
        cambia = parseInt(cambia,2);
        cambia = cambia.toString(16);
        [Host[0],Host[1]]=cambia;
        host = Host.slice(0,4)+":"+ Host.slice(4,8)+":"+ Host.slice(8,12)+":"+ Host.slice(12,16);
        IPv6="fe80::"+host+" /64";
    }


}