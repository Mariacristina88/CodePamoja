<?php

/*******************************************
 * THIS IS THE ENGLISH LANGUAGE PAGE!!!!   *
 *******************************************/

$mailSuccess = null;
$mailFailed = null;
$mailMessage = null;
$redirect   = "http://www.codepamoja.org/#contacts";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    function sendMail()
    {
        global $mailFailed, $mailSuccess, $mailMessage;

        if (empty($_POST['email'])) {
            $mailFailed = true;
            $mailMessage = 'Your email address is required';
            return;
        } 

        if (empty($_POST['subject'])) {
            $mailFailed = true;
            $mailMessage = 'A subject is required';
            return;
        }

        if (empty($_POST['message'])) {
            $mailFailed = true;
            $mailMessage = 'A message is required';
            return;
        }

        if (empty($_POST['name'])) {
            $mailFailed = true;
            $mailMessage = 'Your explanation for why you would like access is required';
            return;
        }

        $name = trim($_POST['name']);
        $company = trim($_POST['company']);
        $subject = trim($_POST['subject']);
        $email = trim($_POST['email']);
        $telephone = trim($_POST['telephone']);
        $mess = trim($_POST['message']);
        $situation = trim($_POST['situation']);

        $message = "Name: $name<br>Email: $email<br>Phone: $telephone<br>Subject: $subject<br>Message: $mess<br>$situation";
        $from = ($name) ? $name . ' <' . $email . '>' : $email;
        $headers = "From: {$from}\r\nReply-To: {$from}\r\n";
        $headers .= "Content-type: text/html\r\n";
        $title = 'Application on restructuringanoymous.com';

        if (mail($to = 'info@codepamoja.org', $title, $message, $headers)) {
            $mailSuccess = true;
            
        } else {
            $mailFailed = true;
            $mailMessage = 'Email sending failed';
        }
    }

    sendMail();
    header("Location: $redirect");
}

?>