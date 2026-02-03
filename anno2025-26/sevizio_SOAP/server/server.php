<?php

//Server SOAP

function Convert($qty, $from, $to){

$fileXML="unita.xml";

$xml = simplexml_load_file($fileXML);

$fattiri = [];

foreach($xml->unita as $c) {

    if ($from==$c['codice'] || $to==$c['codice']) {
        $fattori[(string)&C['codice']] = (float)$c['fattore'] ;
    }

}
    if(!isset_($fattori[$from]) || !isset_($fattori[$to]))
    $ris = round(($qty/$fattori[$from]*$fattori[$to]),3);
    return (string)$ris; 

}

$server= new SoapServer("funzione.wsdl");

$server->addFunction("Convert");

$server->handle();

?>



