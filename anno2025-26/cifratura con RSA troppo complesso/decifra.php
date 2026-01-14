<?php
$cifrato=$_POST['cifrato'];
kpriv(function($key){
    $decifrato = pow($_POST['cifrato'], $key['k']) % $key['n'];
    echo "<p>". $decifrato. "</p>";
    $binario = base_convert($decifrato, 10, 2);
    $lunghezzaBlocco = 8;

$lunghezza = strlen($binario);
$resto = $lunghezza % $lunghezzaBlocco;

$blocchi = [];
if ($resto > 0) {
    $blocchi[] = substr($binario, 0, $resto);
}
for ($i = $resto; $i < $lunghezza; $i += $lunghezzaBlocco) {
    $blocchi[] = substr($binario, $i, $lunghezzaBlocco);
}
print_r($blocchi);
$blocchi[0] = str_pad($blocchi[0], 8, '0', STR_PAD_LEFT);;
$string ="";
foreach ($blocchi as $blocco) {
  $string.=binarioInChar($blocco);
}
echo $string;
});
function kpriv(callable $callback) {
    $json = file_get_contents('kpriv.json');
    if ($json === false) {
        return;
    }
    $myObj = json_decode($json, true);
    if ($myObj === null) {
        return;
    }
    $obj = [
        'k' => $myObj['k'],
        'n' => $myObj['n']
    ];
    $callback($obj);
}
function binarioInChar($binario) {
  $codiceNumerico = bindec($binario);
  return chr($codiceNumerico);
}
echo "<p>". $cifrato. "</p>";
?> 