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

user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
// Inicia código ------------------Clase 97----------------------------
         console.log(firebase_message_id);
	       console.log(message_data);
	       //usa la variable name y guarda el siguiente valor message_data['name'];
       name = message_data['name'];
        //usa la variable message y guarda el siguiente valor message_data['message'];
	       message = message_data['message'];
        //usa la variable like y guarda el siguiente valor message_data['like'];
        like = message_data['like'];
  
  name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//Termina código
      } });  }); }
getData();

//crea una función que se llame updateLike con un parametro message_id
function updateLike (message_id)
    {
    console.log("clicked on like button - " + message_id);
    // guarda en la variable button_id el valor recivido en el parametro message_id;
 button_id = message_id;
    // guarda en la variable likes lo que esta guardado en el boton, usa el comando document.getElementById(button_id).value;
likes = document.getElementById(button_id).value;
    // guarda en la variable updated_likes Number(likes) + 1; para aumentar el número de likes 
updated_likes =
  Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({like : updated_likes  });
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

