<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dati Anagrafici Salvati</title>
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
            border-radius: 20px;
            box-shadow: 0 25px 70px rgba(0,0,0,0.3);
            max-width: 1000px;
            width: 100%;
            animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #667eea;
        }
        
        .header h1 {
            color: #667eea;
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header p {
            color: #666;
            font-size: 16px;
        }
        
        .info-box {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border-left: 5px solid #667eea;
            padding: 30px;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .info-box h3 {
            color: #667eea;
            margin-bottom: 25px;
            font-size: 22px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .info-box h3::before {
            content: "📊";
            font-size: 24px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 18px 15px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        td {
            padding: 16px 15px;
            border-bottom: 1px solid #e2e8f0;
            color: #2d3748;
            font-size: 15px;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        tr:hover {
            background-color: #f7fafc;
            transition: background-color 0.3s ease;
        }
        
        tr:nth-child(even) {
            background-color: #fafafa;
        }
        
        tr:nth-child(even):hover {
            background-color: #f0f4f8;
        }
        
        .no-data {
            text-align: center;
            padding: 40px;
            color: #718096;
            font-size: 18px;
        }
        
        .no-data::before {
            content: "⚠️";
            display: block;
            font-size: 48px;
            margin-bottom: 15px;
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
        
        @media (max-width: 768px) {
            .container {
                padding: 25px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            table {
                font-size: 13px;
            }
            
            th, td {
                padding: 12px 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dati Anagrafici</h1>
            <p>Visualizzazione completa dei dati salvati</p>
        </div>
        
        <div class="info-box">
            <h3>Dati Ricevuti</h3>
            <?php
                $filename = "dati_anagrafici.json";

                if (file_exists($filename) && filesize($filename) > 0) {
                    $file_r = fopen($filename, "r") or die("Impossibile aprire il file in lettura!");
                    $json_string = fread($file_r, filesize($filename));
                    fclose($file_r);
                
                    $data = json_decode($json_string, true);
                    
                    if (!empty($data) && is_array($data)) {
                        echo "<table>";
                        echo "<tr>
                                <th>Nome</th>
                                <th>Cognome</th>
                                <th>Data di Nascita</th>
                                <th>Luogo di Nascita</th>
                                <th>Indirizzo</th>
                                <th>Città</th>
                                <th>CAP</th>
                              </tr>";
                        
                        foreach ($data as $record) {
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($record['nome'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['cognome'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['dataNascita'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['luogoNascita'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['indirizzo'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['citta'] ?? '-') . "</td>";
                            echo "<td>" . htmlspecialchars($record['cap'] ?? '-') . "</td>";
                            echo "</tr>";
                        }
                        
                        echo "</table>";
                    } else {
                        echo "<div class='no-data'>Nessun dato disponibile</div>";
                    }
                } else {
                    echo "<div class='no-data'>Il file non esiste o è vuoto</div>";
                }
            ?>
        </div>
        <div class="button-container">
            <a href="index.html" class="btn btn-primary"> Inserisci Altri Dati</a>
        </div>
    </div>
</body>
</html>