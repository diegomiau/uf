// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49556qbW0SpGeS7UtCvfM301kMeYjHwg",
  authDomain: "prueba-d2385.firebaseapp.com",
  databaseURL: "https://prueba-d2385-default-rtdb.firebaseio.com",
  projectId: "prueba-d2385",
  storageBucket: "prueba-d2385.appspot.com",
  messagingSenderId: "496896243363",
  appId: "1:496896243363:web:8c61b3c747ac3a09dbb116"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="hola"+user_name;
function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData ();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }