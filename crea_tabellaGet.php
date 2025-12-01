<?php
$a=$_GET['righe']; // lettura dei dati ricevuti dal client
$b=$_GET['colonne']; // lettura 
echo "i dati ricevuti sono: "."righe: ".$a."; colonne: ".$b."<br>";
function creaTabella(int $a, int $b) {
    echo "<table "."border='1px solid black'".">";
    $counter=10;
    for ($i = 0; $i < $a; $i++) {
        echo "<tr "."border='1px solid black'".">";
        for ($j = 0; $j < $b; $j++) {
            echo "<td "."border='1px solid black'".">"."$counter"."</td>";
            $counter++;
        }
        echo "</tr>";
        $counter=$counter+4;
    }
    echo "</table>";
}
echo creaTabella($a,$b);
?>