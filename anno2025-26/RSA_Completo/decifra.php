<?php
$cifrato=$_POST['cifrato'];
$Cifrato= explode(',',$cifrato);
$decifrato=[];
$file_r = fopen('kpriv.json', "r") or die("Impossibile aprire il file in lettura!");
$json_string = fread($file_r, filesize('kpriv.json'));
fclose($file_r);
$myObj = json_decode($json_string, true);
$key = ['k' => $myObj['k'],'n' => $myObj['n']];
for($i=0; $i<count($Cifrato);$i++){
    array_push($decifrato,chr(bcpowmod($Cifrato[$i], $key['k'], $key['n'])));
}
echo implode('', $decifrato);
?> 