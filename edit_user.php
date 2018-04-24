<!DOCTYPE html>
<html lang="en">
<?php
include("session.php");
?>
<?php
if($_SERVER["REQUEST_METHOD"] == "GET") 
{
	$uid = $_GET['user'];      
}   
?>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Creative - Bootstrap 3 Responsive Admin Template">
  <meta name="author" content="GeeksLabs">
  <meta name="keyword" content="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal">
  <link rel="shortcut icon" href="img/favicon.png">

  <title>Smart Bil Admin</title>

  <!-- Bootstrap CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- bootstrap theme -->
  <link href="css/bootstrap-theme.css" rel="stylesheet">
  <!--external css-->
  <!-- font icon -->
  <link href="css/elegant-icons-style.css" rel="stylesheet" />
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <link href="css/daterangepicker.css" rel="stylesheet" />
  <link href="css/bootstrap-datepicker.css" rel="stylesheet" />
  <link href="css/bootstrap-colorpicker.css" rel="stylesheet" />
  <!-- date picker -->

  <!-- color picker -->

  <!-- Custom styles -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet" />

  <!-- HTML5 shim and Respond.js IE8 support of HTML5 -->
  <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
      <script src="js/lte-ie7.js"></script>
    <![endif]-->

</head>

<body>

  <!-- container section start -->
  <section id="container" class="">
  <header class="header dark-bg">
      <div class="toggle-nav">
        <div class="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i class="icon_menu"></i></div>
      </div>

      <!--logo start-->
      <a href="index.php" class="logo">Smart <span class="lite">Bill</span></a>
      <!--logo end-->

     

      <div class="top-nav notification-row">
        <!-- notificatoin dropdown start-->
        <ul class="nav pull-right top-menu">

          <!-- task notificatoin start -->
         
          <!-- alert notification end-->
          <!-- user login dropdown start-->
          <li class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="profile-ava">
                                <img alt="" src="img/avatar1_small.jpg">
                            </span>
                            <span class="username">Admin</span>
                            <b class="caret"></b>
                        </a>
            <ul class="dropdown-menu extended logout">
              <li>
                <a href="logout_internal.php"><i class="icon_key_alt"></i> Log Out</a>
              </li>
            </ul>
          </li>
          <!-- user login dropdown end -->
        </ul>
        <!-- notificatoin dropdown end-->
      </div>
    </header>
    <!--header end-->

    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu">
          <li class="sub-menu">
            <a class="" href="index.php">
                          <i class="icon_house_alt"></i>
                          <span>Home</span>
                      </a>
          </li>
           <li class="active">
            <a class="" href="form_component.php">
                          <i class="icon_document_alt"></i>
                          <span>Create New User</span>
                      </a>
          </li>
          <li class="sub-menu">
            <a class="" href="form_validation.php">
                          <i class="icon_document_alt"></i>
                          <span>Edit Details Of User</span>
                      </a>
          </li>
           <li class="sub-menu">
            <a class="" href="basic_table.php">
                          <i class="icon_table"></i>
                          <span>Generate Bill</span>
                      </a>
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="page-header"><i class="fa fa-file-text-o"></i>Edit User</h3>
            <ol class="breadcrumb">
              <li><i class="fa fa-home"></i><a href="index.php">Home</a></li>
              <li><i class="fa fa-file-text-o"></i>Create New User</li>
              <li><i class="fa fa-file-text-o"></i>Edit User</li>
            </ol>
          </div>
        </div>
        <!-- Basic Forms & Horizontal Forms-->

        <div class="row">
          <div class="col-lg-6">
            <section class="panel">
              <header class="panel-heading">
               Edit User
              </header>
              <div class="panel-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address:</label>
                    <div id="exampleInputEmail1" class="required" style="color:blue"></div>
                  </div>
                  <div class="form-group">
                  <label for="exampleInputPassword1">Password:</label>
                    <div id="exampleInputPassword1" class="required" style="color:blue"></div>
                  </div>
                  <div class="form-group">
                    <label for="name">Name:<span class="required" id="error2" style="color:red">*</span></label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group">
                    <label for="meterid">Meter ID:<span class="required" id="error3" style="color:red">*</span></label>
                    <input type="text" class="form-control" id="meterid">
                  </div>
                  <div class="form-group">
                    <label for="mobileno">Mobile No:<span class="required" id="error4" style="color:red">*</span></label>
                    <input type="text" class="form-control" id="mobileno">
                  </div>
                  <div class="form-group">
                    <label for="address">Address:<span class="required" id="error5" style="color:red">*</span></label>
                    <input type="text" class="form-control" id="address">
                    
                  </div>
                  <div id="uid" style="display: none;"></div>
                  <button type="submit"  class="btn btn-primary" onclick="addUser()">Update</button>
              </div>
            </section>
          </div>
        </div>
        <!-- page end-->
      </section>
    </section>
    <!--main content end-->
    
  </section>
  <!-- container section end -->
  <!-- javascripts -->
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <!-- nice scroll -->
  <script src="js/jquery.scrollTo.min.js"></script>
  <script src="js/jquery.nicescroll.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/jquery.validate.min.js"></script>
  <!-- jquery ui -->
  <script src="js/jquery-ui-1.9.2.custom.min.js"></script>

  <!--custom checkbox & radio-->
  <script type="text/javascript" src="js/ga.js"></script>
  <!--custom switch-->
  <script src="js/bootstrap-switch.js"></script>
  <!--custom tagsinput-->
  <script src="js/jquery.tagsinput.js"></script>

  <!-- colorpicker -->

  <!-- bootstrap-wysiwyg -->
  <!-- ck editor -->
  
 <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.12.0/firebase-firestore.js"></script> 
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhsX31FUrTYYB4Umq22WKTq4kfwCZqhc0",
    authDomain: "smartbill-b2d2b.firebaseapp.com",
    databaseURL: "https://smartbill-b2d2b.firebaseio.com",
    projectId: "smartbill-b2d2b",
    storageBucket: "smartbill-b2d2b.appspot.com",
    messagingSenderId: "335993277037"
  };
  firebase.initializeApp(config);
</script>
<script src="js/edituser.js"></script>
<script type="text/javascript">
      var uid = "<?php Print($uid); ?>";
     edituser(uid); 
</script>
 


</body>

</html>
