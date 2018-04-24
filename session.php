<?php
/**
 * Created by IntelliJ IDEA.
 * User: royal
 * Date: 12/4/18
 * Time: 11:39 PM
 */


   session_start();

   $user_check = $_SESSION['login_user'];


   if(!isset($_SESSION['login_user'])){
       header("location:login.php");
   }
?>