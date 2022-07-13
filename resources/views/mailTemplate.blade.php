<!doctype html>
<html lang="en" style='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;'>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

</head>
<body>
<div style="margin: 0 auto; width: 400px; overflow: auto; background: #C9B0D9; padding: 5px 15px 15px 15px; border-radius: 30px;">
    <h1 style="width: 100%">Заказ обратного звонка!</h1>
    <div style="width: 100%">
        <div style="width: 50%; float: left;">
            <div style="width: 200px">
                <label for="name">Имя:</label>
            </div>
            <div style="width: 200px">
                <label for="surname">Отчество:</label>
            </div>
            <div style="width: 200px">
                <label for="phone">Номер телефона:</label>
            </div>
        </div>
        <div style="width: 50%; float: left;">
            <div style="width: 200px">
                <span id="name">{{$name}}</span>
            </div>
            <div style="width: 200px">
                <span id="surname">{{$surname}}</span>
            </div>
            <div style="width: 200px">
                <span id="phone">{{$phone}}</span>
            </div>
        </div>
    </div>
</div>
</body>
</html>
