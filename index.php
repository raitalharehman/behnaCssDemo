<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="giphy.gif" type="image/gif" sizes="16x16">
    <title>Behna</title>
    <link href="./behna.css" rel="stylesheet" type="text/css">
    <script src="jquery-1.12.3.min.js"></script>
    <style>
        body {
            height: 100vh;
            width: 100%;
            text-align: center;
            overflow: hidden;
        }

        h1 {
            margin-top: 40vh;
            cursor: wait;
        }
        h5 {
            cursor: none;
        }
    </style>
    <script>
        // Keys Disable for inspect
        $(document).keydown(function (event) {
            // if (event.keyCode === 123) {
            //     return false;
            // }
            // else if (event.keyCode === 116) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.shiftKey && event.keyCode === 105) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.keyCode === 85) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.keyCode === 117) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.keyCode === 82) {
            //     return false;
            // }
            // else if (event.ctrlKey && event.keyCode === 114) {
            //     return false;
            // }
                return false;
        });
        // Right Click Disable
        $(document).on("contextmenu", function (e) {
            e.preventDefault();
        });
    </script>
</head>
<body>
<h1 class="fadeInDown lol">Welcome to Behna's World</h1>
<h5>Try to Inspect me</h5>
</body>
</html>
