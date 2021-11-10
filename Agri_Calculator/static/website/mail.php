<?php

	$to = "md.shahinfb24@gmail.com"; // this is your Email address
	$from  = $_POST['email']; // this is the sender's Email address
	$sender_name = $_POST['name'];
	$phone = $_POST['phone'];
	$address = $_POST['address'];
	$note = $_POST['note'];


	$subject = "Form submission";
	$message = $sender_name . " has send the contact message! His/ her phone number is : " .  $phone . ", and his / her address is " . $address . ". He / she wrote the following... ". "\n\n" . $note;

	$headers = 'From: ' . $from;
	mail($to, $subject, $message, $headers);

?>