<?php
$filename = "dati_anagrafici.json";

if (file_exists($filename) && filesize($filename) > 0) {
    $file_r = fopen($filename, "r") or die("Impossibile aprire il file in lettura!");
    $json_string = fread($file_r, filesize($filename));
    fclose($file_r);

    $data = json_decode($json_string, true);

    if (!is_array($data) || !isset($data["archivio"])) {
        $data = ["archivio" => []];
    }
} else {
    $data = ["archivio" => []];
}

$data["archivio"][] = $_POST;
$json_finale = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

$file_w = fopen($filename, "w") or die("Impossibile aprire il file in scrittura!");
fwrite($file_w, $json_finale);
fclose($file_w);

?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dati Salvati con Successo</title>
    <link rel="icon" href="https://rubinomatteo.github.io/lavoriScuola/imagini/rubi.jpg" type="image/jpg" />

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 700px;
            width: 100%;
            animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .success-icon {
            text-align: center;
            font-size: 80px;
            margin-bottom: 20px;
            animation: bounce 0.6s ease-in-out;
        }
        
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        
        h1 {
            color: #2d3748;
            text-align: center;
            margin-bottom: 30px;
            font-size: 28px;
        }
        
        .info-box {
            background: #f7fafc;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        .info-box h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .json-display {
            background: #2d3748;
            color: #68d391;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-break: break-all;
            margin: 15px 0;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .message {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #c3e6cb;
            margin: 20px 0;
            line-height: 1.6;
        }
        
        .button-container {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            justify-content: center;
        }
        
        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
    </style>
</head>
<body>
    <div class="container">
        
        <h1>Dati Salvati con Successo!</h1>
        
        <div class="info-box">
            <h3>Contenuto JSON Codificato:</h3>
            <div class="json-display"><?php echo htmlspecialchars($txt); ?></div>
        </div>
        
        <div class="message">
            <strong>✓ Operazione completata:</strong><br>
            I dati inviati dal client sono stati codificati in formato JSON e scritti nel file <strong>dati_anagrafici.json</strong>
        </div>
        
        <div class="info-box">
            <h3> Dati Ricevuti:</h3>
            <?php
            if (!empty($_POST)) {
                echo "<ul style='list-style: none; padding: 0;'>";
                foreach ($_POST as $key => $value) {
                    echo "<li style='padding: 8px 0; border-bottom: 1px solid #e2e8f0;'>";
                    echo "<strong style='color: #667eea;'>" . htmlspecialchars($key) . ":</strong> ";
                    echo htmlspecialchars($value);
                    echo "</li>";
                }
                echo "</ul>";
            } else {
                echo "<p style='color: #999;'>Nessun dato ricevuto</p>";
            }
            ?>
        </div>
        
        <div class="button-container">
            <a href="index.html" class="btn btn-primary"> Inserisci Altri Dati</a>
        </div>
    </div>
</body>
</html>