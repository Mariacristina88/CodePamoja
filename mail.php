<?php

/*******************************************
 * THIS IS THE ENGLISH LANGUAGE PAGE!!!!   *
 *******************************************/

$mailSuccess = null;
$mailFailed = null;
$mailMessage = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    function sendMail()
    {
        global $mailFailed, $mailSuccess, $mailMessage;

        if (empty($_POST['email'])) {
            $mailFailed = true;
            $mailMessage = 'Your email address is required';
            return;
        }

        if (empty($_POST['situation'])) {
            $mailFailed = true;
            $mailMessage = 'Your explanation for why you would like access is required';
            return;
        }

        $name = trim($_POST['name']);
        $company = trim($_POST['company']);
        $email = trim($_POST['email']);
        $website = trim($_POST['website']);
        $situation = trim($_POST['situation']);

        $message = "Name: $name<br>Company: $company<br>Email: $email<br>Website: $website<br><br>$situation";
        $from = ($name) ? $name . ' <' . $email . '>' : $email;
        $headers = "From: {$from}\r\nReply-To: {$from}\r\n";
        $headers .= "Content-type: text/html\r\n";
        $title = 'Application on restructuringanoymous.com';

        if (mail($to = 'info@restructuringanonymous.com', $title, $message, $headers)) {
            $mailSuccess = true;
        } else {
            $mailFailed = true;
            $mailMessage = 'Email sending failed';
        }
    }

    sendMail();
}
?>