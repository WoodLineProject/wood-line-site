<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    </head>
    <body class="antialiased">
    <div id="app"></div>
    <script>
        // rename myToken as you like
        window.myToken =  <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
