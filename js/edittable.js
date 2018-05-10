var storage = firebase.storage();
var db=firebase.firestore();
var meterid;
var d = new Date();
var n = d.getMonth();
var y=d.getFullYear();
var reference = storage.ref('meterid');
console.log(reference);
const list_div=document.querySelector("#list_div");
db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
    	list_div.innerHTML+="<tr><td>"+doc.data().meterid+
    	"</td><td>"+doc.data().name+
    	"</td><td>"+doc.data().email+"</td><td>"+
    	doc.data().mobileno+"</td><td>"+
    	doc.data().address+"</td><td>"+
    	"<a href=http://localhost/WebContent/edit_user.php?user="+doc.data().uid+">Edit</a>"+"</td></tr>";
    });
});