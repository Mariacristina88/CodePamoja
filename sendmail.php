<?php
	
	$to			= "mariacristinadt@hotmail.com";				
	$subject	= "Mailformulier via Portfolio";		
	$subject	= $_POST['subject']; 					
	$sender		= $_POST['email'];						
	$headers	= "From: $sender";						
	$redirect	= "http://www.codepamoja.org/#contacts";				
	foreach($_POST as $key => $val) {					
		$message .= "$key: $val\n";						
	} 
	mail($to, $subject, $message, $headers);			
	header("Location: $redirect");						
?>