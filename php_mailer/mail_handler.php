<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');

$message = [];
$output = [
    'success' => null,
    'messages' => []
];

//Sanitize name field
$message['name'] = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
if(empty($message['name'])){
    $output['success'] = false;
    $output['messages'][] = 'missing name key';
}

//Validate email field
$message['email'] = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
if(empty($message['email'])){
    $output['success'] = false;
    $output['messages'][] = 'invalid email key';
}

// $message['email'] = filter_var($_POST['email'], FILTER_VALIDATE_REGEXP, ['options'=>['regexp'=>'/regex pattern here/']]);

//Validate subject
$message['subject'] = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
// if(empty($message['subject'])){
//     $message['subject'] = $message['name'] . " has sent you a message on your portfolio";
//     $message['subject'] = substr($message['message'], 0, 78);
// }

// //Validate number
// $message['number'] = filter_var($_POST['number'], FILTER_SANITIZE_STRING);
// if(empty($message['number'])){
//     $output['success'] = false;
//     $output['messages'][] = 'invalid number key';
// }

//Sanitize message
$message['message'] = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
if(empty($message['message'])){
    $output['success'] = false;
    $output['messages'][] = 'missing message key';
}

if($output['success'] !== null) {
    http_response_code(400);
    echo json_encode($output);
    exit();
}

// Set up email object
$mail = new PHPMailer;
$mail->SMTPDebug = 3;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
// $mail->From = 'example@gmail.com';  // sender's email address (shows in "From" field)
// $mail->From = $message['email'];
$mail->From = EMAIL_USER; //Add a recipient
$mail->addAddress(EMAIL_TO_ADDRESS);
$mail->FromName = EMAIL_USERNAME;   // sender's name (shows in "From" field)
// $mail->addAddress('recipient1@example.com', 'First Recipient');  // Add a recipient
//$mail->addAddress('ellen@example.com');                        // Name is optional
// $mail->addReplyTo('example@gmail.com');                          // Add a reply-to address
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->addReplyTo($message['email'], $message['name']); //auto replies to recipient
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
//Only necessary if no subject provided


$mail->Subject = $message['subject'];

//For HTML text
$message['message'] = nl2br($message['message']); // Convert newline characters to line
$mail->Body = $message['message'];
$mail->AltBody = htmlentities($message['message']);

// $mail->Subject = 'Here is the subject';
// $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

// $mail->send();

// Attempt email send, output
if(!$mail->send()) {
    $output['success'] = false;
    $output['messages'][] = $mail->ErrorInfo;
} else {
    $output['success'] = true;
}
    echo json_encode($output);
?>