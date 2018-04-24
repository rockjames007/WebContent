var auth=firebase.auth();
var db=firebase.firestore();
function addUser()
{
	var email=document.getElementById("exampleInputEmail1").value;
	var password=document.getElementById("exampleInputPassword1").value;
	var meterid=document.getElementById("meterid").value;
	var mobileno=document.getElementById("mobileno").value;
	var address=document.getElementById("address").value;
	var name=document.getElementById("name").value;
	var flag0=0,flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
	var phoneno = "/^\d{10}$/";
	if(email=="")
		{
		document.getElementById("error0").innerHTML="email is required!!!";
		flag0=1;
		}
	else if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)))
		{document.getElementById("error0").innerHTML="email is incorrect!!!";
		flag0=1;
		}
	else
		{
		document.getElementById("error0").innerHTML="";
		flag0=0;
		}
	if(password=="")
	   {
	   document.getElementById("error1").innerHTML="password is required!!!";
	   flag1=1;
	   }
	 else if(password.length<6)
	   {
	   document.getElementById("error1").innerHTML="password should be greater than 6!!!";
	   flag1=1;
	   }
	 else
		{
		document.getElementById("error1").innerHTML="";
		flag1=0;
		}
	 if(name=="")
	  {
	   document.getElementById("error2").innerHTML="name is required!!!";
	   flag2=1;
	  }
	 else
		{
		document.getElementById("error2").innerHTML="";
		flag2=0;
		}
	if(meterid=="")
	  {
	   document.getElementById("error3").innerHTML="meterid is required!!!";
	   flag3=1;
	  }
	else
	{
	document.getElementById("error3").innerHTML="";
	flag3=0;
	}
	if(mobileno=="")
	  {
	   document.getElementById("error4").innerHTML="mobile no is required!!!";
	   flag4=1;
	  }
	else if(!(/^\d{10}$/.test(mobileno)))
		{
		document.getElementById("error4").innerHTML="mobile no is not valid!!!";
		   flag4=1;
		}
	else
	{
	document.getElementById("error4").innerHTML="";
	flag4=0;
	}
	if(address=="")
	  {
	   document.getElementById("error5").innerHTML="address is required!!!";
	   flag=1;
	  }
	else
	{
	document.getElementById("error5").innerHTML="";
	flag5=0;
	}
	
	 if(flag0==0 && flag1==0 && flag2==0 && flag3==0 && flag4==0 && flag5==0)
		  {
	auth.createUserWithEmailAndPassword(email,password).then(function() 
			{ 
	           console.log("User Created Successfully!");
	            firebase.auth().signInWithEmailAndPassword(email,password).then(function()
	            		{      var timestamp = firebase.firestore.FieldValue.serverTimestamp();
	            	          var user = firebase.auth().currentUser;
	    	                  firebase.auth().onAuthStateChanged(function(user)
	    	                {
	    	                  if(user)
	    	                  {
	    	                       db.collection("users").doc(user.uid).set(
	    	                          { address: address,
	    	                        	 email: email,
	    	                            meterid: meterid,
	    	                            mobileno: mobileno,
	    	                            name: name,
	    	                            updated: timestamp 
		 		                      })
		 		                  .then(function()
		 		                		  {
		 		                          console.log("Document successfully written!");
		 		                          })
		 		                  .catch(function(error) 
		 		                		  {
		 		                 console.error("Error writing document: ", error);
		 		                          });
	    	                       db.collection("meterDetails").doc(meterid).collection('2017').doc('december').set({billamt:500})
	    	                      .then(function()
		 		                		  {
		 		                          console.log("meter details successfully written!");
		 		                         window.location="http://localhost/WebContent/edit_user.php?user="+user.uid;
		 		                          })
		 		                  .catch(function(error) 
		 		                		  {
		 		                 console.error("Error writing document: ", error);
		 		                          });
	    	                  } 
	    	                  else
    	                	  {
    	                	   console.log("error in signing user");
    	                	  }
	    	                });
	            		  })
	                 .catch(function(error) {
	                 console.error("Error in signing in: ", error);
	                 });
	  })
	   .catch(function(error) {
	          console.error("Error Creating User: ", error);
});
 }
}	
