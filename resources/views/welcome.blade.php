<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

    </head>
    <body class="antialiased">
        <div>
            <div id="app">
                <example-component></example-component>
            </div>
            <script src="{{ mix('/js/app.js') }}"></script>
        </div>
    </body>
</html>
