function genera(){
    const pl = document.getElementById("prefixLength").value;
    const IP = document.getElementById("IP-Address").value;
    const tabella = document.getElementById("tabella");
    let ip = IP.split(".");
    let ipbin =[parseInt(ip[0]).toString(2),parseInt(ip[1]).toString(2),parseInt(ip[2]).toString(2),parseInt(ip[3]).toString(2)];
    for (let i =0;i<ipbin.length;i++){
        if(ipbin[i].length<8){
            let lun= ipbin[i].length;
            for (let j = 0;j<(8-lun);j++){
                ipbin[i]="0"+ipbin[i];
            }
        }
    }
    let Ip = ipbin.join("");
    let net = Ip.slice(0,pl);
    let host = Ip.slice(pl,32);
    let dnet = '';
    for (let i =1;i<=net.length/8;i++){
        dnet += parseInt(net.slice((i-1)*8,i*8),2);
    }
    let broadcast_dec = Math.pow(2,32-pl)-1;
    let broadcast = broadcast_dec.toString(2);
    let nett=["","",""]
    for (let i = 0;i<net.length/8;i++){
       nett[i]= net.substr(8*i,8)
    }
    let n= nett.join(".")
    let dnett=["","",""]
    for (let i = 0;i<dnet.length/3;i++){
        dnett[i]= dnet.substr(3*i,3)
     }
     let dn= dnett.join(".")
    for ( let i=1;i < broadcast_dec;i++){
        dhost=i;
        let bhost=dhost.toString(2);
        let sl=32-pl
        if(dhost.toString(2).length<sl){
            let lun= bhost.length;
            for (let j = 0;j<(sl-lun);j++){
                bhost="0"+bhost;
            }
        }
        tabella.innerHTML += "<tr><td id='net'>" + n + "</td><td id='host'>" + bhost + "</td><td id='net'>" + dn + "</td><td id='host'>" + dhost + "</td><td>" + pl + "</td></tr>";
    }
    tabella.innerHTML += "<tr><td id='net'>" + n + "</td><td id='host'>" + broadcast + "</td><td id='net'>" + dn + "</td><td id='host'>" + broadcast_dec + "</td><td>" + pl + "</td></tr>";
}