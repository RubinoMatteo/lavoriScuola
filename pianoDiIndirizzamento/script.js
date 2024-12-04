function genera(){
    const pl = document.getElementById("prefixLength").value;
    const IP = document.getElementById("IP-Address").value;
    const bin = document.getElementById("tabella");
    const dec = document.getElementById("dec");
    let ip = IP.split(".");
    let ipbin =[ip[0].toString(2),ip[1].toString(2),ip[2].toString(2),ip[3].toString(2)]
    let Ip = ipbin.join("");
    let net = Ip.slice(0,pl);
    let host = Ip.slice(pl,32);
    let dnet = parseInt(net,2);
    let dhost = parseInt(host,2)
    let broadcast_dec = Math.pow(2,32-pl)-1;
    let broadcast = broadcast_dec.toString(2);
    for ( let i=1;i < broadcast_dec;i++){
        dhost=i;
        bin.innerHTML += "<tr><td id='net'>" + net + "</td><td id='host'>" + dhost.toString(2) + "</td><td>" + pl + "</td></tr>";
        dec.innerHTML += "<tr><td id='net'>" + dnet + "</td><td id='host'>" + dhost + "</td><td>" + pl + "</td></tr>";
    }
    bin.innerHTML += "<tr><td id='net'>" + net + "</td><td id='host'>" + broadcast + "</td><td>" + pl + "</td></tr>";
    dec.innerHTML += "<tr><td id='net'>" + dnet + "</td><td id='host'>" + broadcast_dec + "</td><td>" + pl + "</td></tr>";
}