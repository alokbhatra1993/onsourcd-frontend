<?php
 header('Access-Control-Allow-Origin:*');

// Put contacting email here
echo "amit";die;
require 'PHPMailerAutoload.php';
require "class.phpmailer.php";

$mail = new PHPMailer();
$mail->SMTPDebug  = 3;

$firstname = $_POST['firstname'];
	$email = $_POST['email'];
	$writecoment = $_POST['writecoment'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];

$mail->IsSMTP();
$mail-> Host='smtp.gmail.com';
$mail->Port=587;
$mail->SMTPAuth=true;
$mail->SMTPSecure='tls';
$mail->Username='kabra4215@gmail.com'; // enter email here
$mail->Password=''; //enter password of email id..
$mail->setFrom('kabra4215@gmail.com','RIORELAX'); //change name and email 
$mail->addAddress($email);
$mail->addReplyTo('amitjadav2002@gmail.com'); //change email here..
$mail->isHTML(true);
$mail->Subject='PHP mailer Subject';
$mail->Body    = 'Thanks for mail us';


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

// header('Access-Control-Allow-Origin:*');
// $conn =new mysqli("localhost","root","","metaverse");
// if(mysqli_connect_error()){
// 	echo mysqli_connect_error();
// 	exit();
// }
// else{
// 	$name = $_POST['name'];
// 	$email = $_POST['email'];
// 	$massage = $_POST['message'];
// 	$tel = $_POST['tel'];
// 	$subject = $_POST['subject'];

// 	$sql = "INSERT INTO contact(name,email,mobile,topic,massage) VALUES('$name','$email','$massage','$tel','$subject');";
//     $res = mysqli_query($conn,$sql);
// 	print_r($sql);
// 	if($res){
// 		echo "success!";
// 	}
// 	else{
// 		echo "error!";

// 	}
// 	$conn->close();
// }

?>