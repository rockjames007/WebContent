var storage = firebase.storage();
var db=firebase.firestore();
var meterid;
var d = new Date();
var n = d.getMonth();
var y=d.getFullYear();
var reference = storage.ref('meterid');
console.log(reference);
const list_div=document.querySelector("#list_div");
gs://smartbill-b2d2b/storage/smartbill-b2d2b.appspot.com/files
db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
    	list_div.innerHTML+="<tr><td>"+doc.data().meterid+
    	"</td><td>"+doc.data().name+
    	"</td><td>"+doc.data().email+
    	"</td><td>"+"<img src=https://firebasestorage.googleapis.com/v0/b/smartbill-b2d2b.appspot.com/o/meterid%2F1111%2F2018%2F4%2Fimagefire.jpg?alt=media&token=3aacc7b6-7f95-42f7-afbb-236b42232af7"+"height=100 width=100/>"+
    	"</td><td>"+"<input type=text id="+doc.data().meterid+"/>"+
    	"</td><td>"+"<button type=submit id="+doc.data().meterid+">submit</button></td></tr>";
    });
});