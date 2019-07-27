<?php
$to  = 'olegsitnik2011@ukr.net';


$subject = 'Письмо с моего сайта';


$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 


$headers .= 'To: Олег <olegsitnik2011@ukr.net>' . "\r\n"; 
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";

var_dump($_POST);

mail($to, $subject, $message, $headers);
?>