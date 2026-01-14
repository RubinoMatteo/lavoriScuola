<?php
$p=$_POST['p'];
$q=$_POST['q'];
if(!isPrime(document.getElementsByName("p").value)){
    echo "almeno uno dei numeri inseriti non é primo";
}else{
    if(!isPrime(document.getElementsByName("q").value)){
        echo "almeno uno dei numeri inseriti non é primo";}}

$n=$p*$q;
$m=($p-1)*($q-1);
$e=random_int(2, $m-1);
while (!sonoPrimiFraLoro($m, $e)) {
    $e=random_int(2, $m-1);
}
$k = inversoModulare($e, $m);

$kpriv = [ "k" => $k, "n" => $n];
$kpub = [ "e" => $e, "n" => $n];

$json_kpub = json_encode($kpub, JSON_PRETTY_PRINT);
$json_kpriv = json_encode($kpriv, JSON_PRETTY_PRINT);

$file_kpriv = fopen("kpriv.json", "w") or die("Impossibile aprire il file in scrittura!");
fwrite($file_kpriv, $json_kpriv);
fclose($file_kpriv);

$file_kpub = fopen("kpub.json", "w") or die("Impossibile aprire il file in scrittura!");
fwrite($file_kpub, $json_kpub);
fclose($file_kpub);


echo "chiavi generata correttamente"


function euclideEsteso($a, $b) {
    if ($b == 0) {
        return array(1, 0); 
    } else {
        list($x1, $y1) = euclideEsteso($b, $a % $b);
        $x = $y1;
        $y = $x1 - intval($a / $b) * $y1;
        return array($x, $y);
    }
}
function inversoModulare($e, $phi) {
    list($x, $y) = euclideEsteso($e, $phi);
    return ($x % $phi + $phi) % $phi;
}
function isPrime(int $n) {
    if ($n <= 1) return false;
    for ($i = 2; $i < $n; $i++) {
        if ($n % i === 0) return false;
    }
    return true;
}
function sonoPrimiFraLoro(int $a, int $b): bool {
    $a = abs($a);
    $b = abs($b);
    while ($b != 0) {
        $resto = $a % $b;
        $a = $b;
        $b = $resto;
    }
    return $a === 1;
}
?> 