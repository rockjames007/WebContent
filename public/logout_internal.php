<?php
/**
 * Created by IntelliJ IDEA.
 * User: royal
 * Date: 12/4/18
 * Time: 11:46 PM
 */

   session_start();
   session_unset();
   if(session_destroy()) {
       header("Location:index.php");
   }
?>