function generaLLA(){
    let MAC = document.getElementById("MAC-Address").value;
    let IPv6 = document.getElementById("IPv6").value;
    if(MAC.length < 12||MAC.length > 17){
        alert("MAC address non valido ");
        MAC = "";
    }
    let i;
    let prima_parte;
    let seconda_parte;
    let Host;
    if (MAC.length == 17){
	let s= MAC[2]
        let r = MAC.split(s);
        i = r.join("");
        prima_parte=i.slice(0,6)
        seconda_parte=i.slice(6,16)
        Host =prima_parte+"fffe"+seconda_parte;
        cambia = parseInt(i.slice(0,2),16);
        cambia = cambia.toString(2);
	if (cambia.length<8){
            let lun= cambia.length;
            for (let j = 0;j<(8-lun);j++){
                cambia="0"+cambia;
            }
        }
        if (cambia.at(6)==0){
            let c =cambia.slice(6,8);
		c='1'.concat('',cambia.at(7));
		let d =cambia.slice(0,6);
		cambia=d.concat("",c)
        }else{
		let c =cambia.slice(6,8);
		c='0'.concat('',cambia[7]);
		let d=cambia.slice(0,5)
		cambia=d.concat("",c)
        }
        cambia = parseInt(cambia,2);
        cambia = cambia.toString(16);
	if (cambia.length<2){
            let lun= cambia.length;
            for (let j = 0;j<(2-lun);j++){
                cambia="0"+cambia;
            }
        }
        Host=cambia.concat(Host.slice(2,16));
        let host = Host.slice(0,4)+":"+ Host.slice(4,8)+":"+ Host.slice(8,12)+":"+ Host.slice(12,16);
	document.getElementById("IPv6").value="fe80::"+host+" /64";
    }else{
        prima_parte=MAC.slice(0,6)
        seconda_parte=MAC.slice(6,16)
        Host =prima_parte+"fffe"+seconda_parte;
        cambia = parseInt(MAC.slice(0,2),16);
        cambia = cambia.toString(2);
	if (cambia.length<8){
            let lun= cambia.length;
            for (let j = 0;j<(8-lun);j++){
                cambia="0"+cambia;
            }
        }
	if (cambia.at(6)==0){
            let c =cambia.slice(6,8);
		c='1'.concat('',cambia.at(7));
		let d =cambia.slice(0,6);
		cambia=d.concat("",c)
        }else{
		let c =cambia.slice(6,8);
		c='0'.concat('',cambia[7]);
		let d=cambia.slice(0,5)
		cambia=d.concat("",c)
        }
        cambia = parseInt(cambia,2);
        cambia = cambia.toString(16);
	if (cambia.length<2){
            let lun= cambia.length;
            for (let j = 0;j<(2-lun);j++){
                cambia="0"+cambia;
            }
        }
        Host=cambia.concat(Host.slice(2,16));
        host = Host.slice(0,4)+":"+ Host.slice(4,8)+":"+ Host.slice(8,12)+":"+ Host.slice(12,16);
        document.getElementById("IPv6").value="fe80::"+host+" /64";
    }

}