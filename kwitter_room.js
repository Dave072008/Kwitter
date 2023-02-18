
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = { apiKey: "AIzaSyCUajuDiAKTlKj8YeilSqfLcQHM5yRyMbM", authDomain: "kwitter-b7838.firebaseapp.com", databaseURL: "https://kwitter-b7838-default-rtdb.firebaseio.com", projectId: "kwitter-b7838", storageBucket: "kwitter-b7838.appspot.com", messagingSenderId: "30222142890", appId: "1:30222142890:web:9b4082840259963fa86fd3", measurementId: "G-5X0KBF04NG" };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
