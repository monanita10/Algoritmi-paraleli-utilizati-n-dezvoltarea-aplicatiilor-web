<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $nume = $_POST["nume"];
    $email = $_POST["email"];
    $mesaj = $_POST["mesaj"];

    $destinatar = "adresa_de_email@exemplu.com";
    
    if(mail($nume, $email, $mesaj)){
        echo "Mesajul a fost trimis cu succes";
    } else {
        echo "Mesajul nu s-a putut trimite. Te rog incearca mai tarziu";
    }
}
?>