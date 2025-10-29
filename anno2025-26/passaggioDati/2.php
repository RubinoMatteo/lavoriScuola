<?php
// salva_dati.php

// Imposta l'header per il content type
/*header('Content-Type: application/json; charset=utf-8');

// Abilita la visualizzazione degli errori (solo per sviluppo!)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Nome del file JSON dove salvare i dati
$filename = 'dati_anagrafici.json';

// Verifica che la richiesta sia POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metodo non consentito. Usa POST.'
    ]);
    exit;
}*/

// Recupera i dati dal form
$dati = [
    'nome' => isset($_POST['nome']) ? trim($_POST['nome']) : '',
    'cognome' => isset($_POST['cognome']) ? trim($_POST['cognome']) : '',
    'dataNascita' => isset($_POST['dataNascita']) ? trim($_POST['dataNascita']) : '',
    'luogoNascita' => isset($_POST['luogoNascita']) ? trim($_POST['luogoNascita']) : '',
    'indirizzo' => isset($_POST['indirizzo']) ? trim($_POST['indirizzo']) : '',
    'citta' => isset($_POST['citta']) ? trim($_POST['citta']) : '',
    'cap' => isset($_POST['cap']) ? trim($_POST['cap']) : '',
    'dataInserimento' => date('Y-m-d H:i:s'),
    'id' => uniqid('user_', true)
];

// Validazione base dei campi obbligatori
/*$campiObbligatori = ['nome', 'cognome', 'dataNascita', 'luogoNascita', 'indirizzo', 'citta', 'cap'];
foreach ($campiObbligatori as $campo) {
    if (empty($dati[$campo])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => "Il campo '$campo' è obbligatorio."
        ]);
        exit;
    }
}*/


// Leggi i dati esistenti dal file JSON (se esiste)
$datiEsistenti = [];
if (file_exists($filename)) {
    $contenutoFile = file_get_contents($filename);
    $datiEsistenti = json_decode($contenutoFile, true);
    
    // Se il file è vuoto o non è un array valido, inizializza come array vuoto
    if (!is_array($datiEsistenti)) {
        $datiEsistenti = [];
    }
}

// Aggiungi i nuovi dati all'array
$datiEsistenti[] = $dati;

// Converti in JSON con formattazione leggibile
$jsonData = json_encode($datiEsistenti, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Verifica che la codifica JSON sia riuscita
if ($jsonData === false) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Errore nella codifica JSON: ' . json_last_error_msg()
    ]);
    exit;
}

// Salva i dati nel file JSON
$result = file_put_contents($filename, $jsonData);

// Verifica che la scrittura sia riuscita
if ($result === false) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Errore nel salvataggio del file.'
    ]);
    exit;
}

// Risposta di successo
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Dati salvati con successo!',
    'data' => $dati,
    'totalRecords' => count($datiEsistenti)
]);
?>