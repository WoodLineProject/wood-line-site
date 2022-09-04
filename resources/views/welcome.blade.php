<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
<!--        google icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
        <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css">
<!--------------------------------------------->
        <!--- kapcha ---->
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
        <!------------------------------>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Wood Line Factory</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/storage/app/public/image/icon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/storage/app/public/image/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/storage/app/public/image/icon/favicon-16x16.png">
        <link type="image/png" sizes="192x192" rel="icon" href="/storage/app/public/image/icon/android-chrome-192x192.png">
    </head>
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>

