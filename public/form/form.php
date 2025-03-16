<?php
if (isset($_POST['email'])) {
    // Получаем данные формы
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $captchaResponse = $_POST['captcha'];

    $secretKey = '6LeWXPYqAAAAAIS-gh6oU2o9sOEENhKPCjgipiOJ';
    $captchaUrl = "https://www.google.com/recaptcha/api/siteverify";

    $captchaData = [
        'secret' => $secretKey,
        'response' => $captchaResponse
    ];
    $captchaVerify = file_get_contents($captchaUrl . '?' . http_build_query($captchaData));
    $captchaResult = json_decode($captchaVerify);

    if (!$captchaResult->success) {
        echo 'CAPTCHA verification failed. Please try again.';
        exit;
    }

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

        if ($filesize < 10000000) {
            mail($to, $subject, $message, $headers);
            echo 'Application accepted, we will contact you as soon as possible!';
        } else {
            echo "There's been an error. The message has not been sent!";
        }
    }
?>