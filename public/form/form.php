<?php
if (isset($_POST['email'])) {
    // Получаем данные формы
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Настройки письма
    $to = "overkot12@gmail.com";
    $from = "noreply@gmail.com";
    $subject = "Заявка на создание сайта";

    // Текст письма
    $emailMessage = "Контактное лицо: $name\nE-mail: $email\nКомментарий: $message\n";

    // Границы письма
    $boundary = md5(time());
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Начало тела письма
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= "$emailMessage\r\n";

    // Работа с файлом (если он загружен)
    if (!empty($_FILES['fileFF']['tmp_name']) && is_uploaded_file($_FILES['fileFF']['tmp_name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'])));
        $filename = $_FILES['fileFF']['name'];
        $filetype = $_FILES['fileFF']['type'];
        $filesize = $_FILES['fileFF']['size'];

        // Проверяем размер файла (10MB макс.)
        if ($filesize < 10000000) {
            $body .= "--$boundary\r\n";
            $body .= "Content-Type: $filetype; name=\"$filename\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n";
            $body .= "Content-Disposition: attachment; filename=\"$filename\"\r\n\r\n";
            $body .= "$attachment\r\n";
        } else {
            echo "Ошибка: файл слишком большой!";
            exit;
        }
    }

    // Завершаем тело письма
    $body .= "--$boundary--";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        echo 'Application accepted, we will contact you as soon as possible!';
    } else {
        echo "There's been an error. The message has not been sent!";
    }
}
?>
