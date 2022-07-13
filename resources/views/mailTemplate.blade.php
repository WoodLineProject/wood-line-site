<!doctype html>
<html lang="en" style='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;'>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

</head>
<body>
<div style="margin: 0 auto;width: 400px; display: flex; flex-direction: column; background: #C9B0D9; padding: 0px 15px 15px 15px; border-radius: 30px;">
    <h1>Заказ обратного звонка!</h1>
    <div style="display: flex; flex-direction: row;">
        <div style="display: flex; flex-direction: column; margin-right: 30px">
            <label for="name" class="col-sm-2 col-form-label">Имя:</label>
            <label for="surname" class="col-sm-2 col-form-label">Отчество:</label>
            <label for="phone" class="col-sm-2 col-form-label">Номер телефона:</label>
        </div>
        <div style="display: flex; flex-direction: column;">
            <span id="name">{{$name}}</span>
            <span id="surname">{{$surname}}</span>
            <span id="phone">{{$phone}}</span>
        </div>
    </div>
</div>
</body>
</html>
