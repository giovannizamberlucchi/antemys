<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\ PHPMailer\ PHPMailer;
use PHPMailer\ PHPMailer\ Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

try {

  //Server settings

  $mail->isSMTP( true ); // Set mailer to use SMTP
  $mail->Host = 'mail.themezinho.net'; // Specify main and backup SMTP servers
  $mail->SMTPAuth = true; //SMTP server
  $mail->SMTPSecure = false;
  $mail->SMTPAutoTLS = false; // Enable SMTP authentication
  $mail->Username = 'support@themezinho.net'; // SMTP username
  $mail->Password = 'xxxxxx'; // SMTP password
  $mail->Port = 587; // TCP port to connect to


  //Recipients
  $mail->setFrom( 'support@themezinho.net' );
  $mail->addAddress( 'support@themezinho.net' ); // Add a recipient
  $mail->addReplyTo( $_REQUEST[ 'email' ], $_REQUEST[ 'name' ] );

  // Content
  $mail->isHTML( true );
  $mail->Subject = $_REQUEST[ 'subject' ];

  $fields = array();
  $fields {
    "name"
  } = "Name";
  $fields {
    "email"
  } = "E-mail";
  $fields {
    "subject"
  } = "Subject";
  $fields {
    "message"
  } = "Message";

  $body = "Message du site Antemys:\n\n";
  foreach ( $fields as $a => $b ) {
    $body .= sprintf( "%20s: %s\n", $b, $_REQUEST[ $a ] );
  }

  $mail->Body = $body;
  $mail->AltBody = $body;

  $mail->send();
  echo 'Message envoyé';
} catch ( Exception $e ) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}