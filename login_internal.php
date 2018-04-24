<?php
//echo "test";
   session_start();
var_dump($_POST);

 if($_SERVER["REQUEST_METHOD"] == "POST") {
    $result=0;
      $myusername = $_POST['username'];
      $mypassword = $_POST['password'];
        if($myusername=="admin" && $mypassword=="admin123"){
            $result=1;
        }

      if($result == 1) {

         $_SESSION['login_user'] = $myusername;
         header("location:index.php");

      }else {

         $_SESSION['error'] = "Invalid Username Or Password Combination!!!" ;
         header("location:login.php");

      }
  }

?>
