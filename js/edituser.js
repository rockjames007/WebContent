
var db=firebase.firestore();
function edituser(uid)
{   var email=document.getElementById("exampleInputEmail1");
    var password=document.getElementById("exampleInputPassword1");
    var meterid=document.getElementById("meterid");
    var mobileno=document.getElementById("mobileno");
    var address=document.getElementById("address");
    var name=document.getElementById("name");
    var docref=db.doc("users/"+uid);
	docref.get().then(function(doc){
		         const data=doc.data();
				email=data.email;
				password=data.password;
				meterid=data.meterid;
				mobileno=data.mobileno;
				address=data.address;
				name=data.name;
				document.getElementById("exampleInputEmail1").innerHTML=email;
				document.getElementById("exampleInputPassword1").innerHTML=password;
			    document.getElementById("meterid").value=meterid;
			    document.getElementById("mobileno").value=mobileno;
			    document.getElementById("address").value=address;
			    document.getElementById("name").value=name;
			    document.getElementById("uid").value=uid;
			}).catch(function (error){
				console.log("Got an error",error)
			});
   

}
function addUser()
{
	var email=document.getElementById("exampleInputEmail1").value;
	var password=document.getElementById("exampleInputPassword1").value;
	var meterid=document.getElementById("meterid").value;
	var mobileno=document.getElementById("mobileno").value;
	var address=document.getElementById("address").value;
	var name=document.getElementById("name").value;
	var flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
	
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
	
	 if(flag2==0 && flag3==0 && flag4==0 && flag5==0)
		  {   var timestamp = firebase.firestore.FieldValue.serverTimestamp();
	          db.collection("users").doc(uid).update(
	    	                          { address: address,
	    	                        	
	    	                            meterid: meterid,
	    	                            mobileno: mobileno,
	    	                            name: name,
	    	                            updated: timestamp 
		 		                      })
		 		                  .then(function()
		 		                		  {
		 		                          console.log("Document successfully written!");
		 		                          window.alert("updated successfully");
		 		                          })
		 		                  .catch(function(error) 
		 		                		  {
		 		                 console.error("Error writing document: ", error);
		 		                          });
	    	                       
		  }
}	