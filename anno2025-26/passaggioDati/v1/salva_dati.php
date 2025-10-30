<?php

$file = fopen("dati_anagrafici.json","a") or die("Impossibile aprire il file!");

$txt = json_encode($_POST); // codifica dell'array associativo POST in un oggetto JSON
echo "il contenuto della codifica in JSON è: ".$txt."<br>";
fwrite($file, $txt . "\n");
fclose($file);
echo "ho letto i dati inviati dal client li ho codificati in formato JSON e poi liho scritti nel file Dati3.txt"."<br>";
?>