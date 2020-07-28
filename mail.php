<?php

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: noreply@frontend-shakirov.online\r\n";


$tel = $_POST['user_phone'];
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);

$name = $_POST['user_name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$email = $_POST['user_email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);

$to          = "timur53shakirov@mail.ru";
$subject     = "Заявка с сайта";
$text        = $name;

if ($tel) {

$text       .= " ждёт звонка на номер ";
$text       .= $tel;

}

if ($email) {

$text       .= " ждёт письма на мэйл ";
$text       .= $email;

}


$sendToMail  = mail($to,$subject,$text,$headers);

if ($sendToMail) {
  echo "ok";
}

?>
