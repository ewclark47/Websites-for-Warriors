<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email))
{
	echo "Name and Email are required!";
	exit;
}

$email_from = 'elliottwclark@gmail.com';//<-your own email here
$email_subject = "New Request Submitted!";
$email_body = "You have received a request from the user $name.\n".
				"email address: $visitor_email\n".
				"Here is the message:\n $message".

$to = "elliottwclark@gmail"; //your own email here again
$headers = "From: $email_from \r\n";

//Now send the email!
mail($to,$email_subject,$email_body,$headers);
//add a redirection to a Thank You page or something.
?>