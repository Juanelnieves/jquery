<?php
// Set the content-type for AJAX response
header('Content-Type: application/json');

// Function to sanitize input data
function sanitize($data) {
    return htmlspecialchars(trim($data));
}

// Verify if the server request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize POST data
    $name = sanitize($_POST['name'] ?? '');
    $surname = sanitize($_POST['surname'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $subject = sanitize($_POST['subject'] ?? '');
    $comment = sanitize($_POST['comment'] ?? '');
    $privacyPolicy = filter_var($_POST['privacyPolicy'] ?? '', FILTER_VALIDATE_BOOLEAN);
    $captchaInput = sanitize($_POST['captcha'] ?? '');
    
    // Dummy captcha validation - Replace this with your actual captcha validation
    $captchaValid = ($captchaInput == $_SESSION['captcha']);

    // Check required fields and captcha
    if (empty($name) || empty($email) || empty($comment) || !$privacyPolicy || !$captchaValid) {
        $response = [
            'status' => 'error',
            'message' => 'Por favor, complete todos los campos requeridos y verifique el captcha.'
        ];
    } else {
        // Process the data (e.g., send email, save to database, etc.)
        // ...

        // Respond with a success message
        $response = [
            'status' => 'success',
            'message' => 'Gracias por contactarnos, ' . $name . '. Hemos recibido su mensaje.'
        ];
    }
} else {
    // Handle incorrect request method
    $response = [
        'status' => 'error',
        'message' => 'Método de solicitud no válido.'
    ];
}

echo json_encode($response);
