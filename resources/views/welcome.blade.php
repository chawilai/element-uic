<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ env('APP_NAME', 'Element') }}</title>
</head>
<body>
    <div id="app">
        <chaw-layouts></chaw-layouts>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>