<?php
if (isset ($_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $name = htmlspecialchars($name);
    $message = htmlspecialchars($message);
    $email = htmlspecialchars($email);

    $name = urldecode($name);
    $message = urldecode($message);
    $email = urldecode($email);

    $name = trim($name);
    $message = trim($message);
    $email = trim($email);

    $to = "overkot12@gmail.com";
    $from = "noreply@gmail.com";
    $subject = "Заявка на создание сайта";
    $message = "\nКонтактное лицо: ".$name."\nE-mail: ".$email."\nКомментарий: ".$message."\n";

    $boundary = md5(date('r', time()));
    $filesize = '';
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
    if(is_uploaded_file($_FILES['fileFF']['tmp_name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'])));
        $filename = $_FILES['fileFF']['name'];
        $filetype = $_FILES['fileFF']['type'];
        $filesize = $_FILES['fileFF']['size'];
        $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
    }
    $message.="
--$boundary--";

    if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
        mail($to, $subject, $message, $headers);
        echo 'Application accepted, we will contact you as soon as possible!';
    } else {
        echo "There's been an error. The message has not been sent!";
    }
}
?>