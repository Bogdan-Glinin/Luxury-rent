<?php

    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    $mail->setFrom('luxuryrentmsk@gmail.com');
    $mail->addAddress('luxuryrentmanagermsk@gmail.com');

    $mail->Subject = 'Обратная свзяь';

    $body = '' .$name . ' оставил заявку на звонок, его телефон ' .$phone;
    $mail->Body = $body;

    if(!$mail->send()) {
        echo 'Error';
    } else {
        header('location: index2.html');
    }

    ?>
