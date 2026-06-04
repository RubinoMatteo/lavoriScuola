<?php
$filename = "posizioni.json";//definisco il file da leggere e scrivere 
$data = []; //inizializzo l'array che conterrà i nostri dati 

if (file_exists($filename) && filesize($filename) > 0) {//controllo se il file esiste
    $file_r = fopen($filename, "r") or die("Impossibile aprire il file in lettura!");//apro il file in modalità lettura
    $json_string = fread($file_r, filesize($filename));//estraggo i dati dal  file
    fclose($file_r);//chiudo il file

    if (!is_array($data)) {//controllo se l'array esiste in caso non esista lo creo
        $data = [];
    }

    $data = json_decode($json_string, true);//inserisco i dati decodificati nell'array data
    

}

$data[] = $_POST; //aggiungo i dati ricevuti dal file InvioDati.html nell'array data
$json_finale = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);//codifico l'array data in un json

$file_w = fopen($filename, "w") or die("Impossibile aprire il file in scrittura!");//apro il file in modalità scrittura
fwrite($file_w, $json_finale);//inserisco i dati appena ricevuti nel nostro file
fclose($file_w);//chiudo il file aperto

echo "dati ricevuti correttamente";//do uun riscontro al js contenuto in InvioDati.html

?>