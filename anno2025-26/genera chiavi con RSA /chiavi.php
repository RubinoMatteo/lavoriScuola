<?php
$p=$_POST['p'];
$q=$_POST['q'];
if(!isPrime(document.getElementsByName("p").value)){
    echo"almeno uno dei numeri inseriti non é primo";
}else{
    if(!isPrime(document.getElementsByName("q").value)){
        echo"almeno uno dei numeri inseriti non é primo";}}
function isPrime($n) {
    if ($n <= 1) return false;
    for ($i = 2; $i < $n; $i++) {
        if ($n % i === 0) return false;
    }
    return true;
}
?> 