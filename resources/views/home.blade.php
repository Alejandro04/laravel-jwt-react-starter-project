<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>laravel-with-jwt-auth</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/theme/app.css') }}" rel="stylesheet">

        <!-- plugins:css -->
        <link rel="stylesheet" href="./theme/node_modules/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="./theme/node_modules/simple-line-icons/css/simple-line-icons.css" />
        <link rel="stylesheet" href="./theme/node_modules/flag-icon-css/css/flag-icon.min.css" />
        <link rel="stylesheet" href="./theme/node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css" />
        <!-- endinject -->
        <!-- plugin css for this page -->
        <link rel="stylesheet" href="./theme/node_modules/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="./theme/node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css" />
        <!-- End plugin css for this page -->
        <!-- inject:css -->
        <link rel="stylesheet" href="./theme/css/style.css" />
        <!-- endinject -->
        <link rel="shortcut icon" href="./theme/images/favicon.png" />
        

        <style>
            body{
                background: #F6F8FA;
            }
        </style>
    </head>
    <body>
        <div id="root-react"></div>
        
  
        <script src="{{ asset('js/app.js') }}"></script>

        <!-- Import jQuery before materialize.js -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>

        <!-- plugins:js -->
        <script src="./theme/node_modules/popper.js/dist/umd/popper.min.js"></script>
        <script src="./theme/node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js"></script>
        <!-- endinject -->
        <!-- Plugin js for this page-->
        <script src="./theme/node_modules/jquery-bar-rating/dist/jquery.barrating.min.js"></script>
        <script src="./theme/node_modules/chart.js/dist/Chart.min.js"></script>
        <script src="./theme/node_modules/raphael/raphael.min.js"></script>
        <script src="./theme/node_modules/morris.js/morris.min.js"></script>
        <script src="./theme/node_modules/jquery-sparkline/jquery.sparkline.min.js"></script>
        <!-- End plugin js for this page-->
        <!-- inject:js -->
        <script src="./theme/js/off-canvas.js"></script>
        <script src="./theme/js/hoverable-collapse.js"></script>
        <script src="./theme/js/misc.js"></script>
        <script src="./theme/js/settings.js"></script>
        <script src="./theme/js/todolist.js"></script>
        <!-- endinject -->
        <!-- Custom js for this page-->
        <script src="./theme/js/dashboard.js"></script>
        <!-- End custom js for this page-->
    </body>
</html>
