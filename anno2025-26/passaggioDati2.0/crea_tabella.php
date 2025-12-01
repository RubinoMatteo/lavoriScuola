<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dati Salvati con Successo</title>
    <link rel="icon" href="https://rubinomatteo.github.io/lavoriScuola/immagini/rubi.jpg" type="image/jpg" />

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
        
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
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

        .info-box table, .info-box tr, .info-box th, .info-box td{
            border: 1px solid black;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <div class="info-box">
            <h3> Dati Ricevuti:</h3>
            <?php
                $filename = "dati_anagrafici.json";

                if (file_exists($filename) && filesize($filename) > 0) {
                    $file_r = fopen($filename, "r") or die("Impossibile aprire il file in lettura!");
                    $json_string = fread($file_r, filesize($filename));
                    fclose($file_r);
                
                    $data = json_decode($json_string, true);
                }

                function creaTabella() {
                    echo "<table>";
                    echo "<tr> <th> nome </th> <th> cognome </th> <th>"'dataNascita'"</th> <th> luogoNascita </th> <th> indirizzo </th> <th> città </th> <th> cap </th> </tr>";
                    for ($i = 0; $i < $data.length; $i++) {
                        echo "<tr>";
                        for ($j = 0; $j < 7; $j++) {
                            echo "<td>"."$data"."</td>";
                        }
                        echo "</tr>";
                    }
                    echo "</table>";
                }
                echo creaTabella();
            ?>
        </div>
    </div>
</body>
</html>
