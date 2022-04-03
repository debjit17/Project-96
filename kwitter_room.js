document.getElementById("user_name").innerHTML = "Welcome " + localStorage.getItem("user_name") + " !";

var firebaseConfig = {
    apiKey: "AIzaSyAQuWfTJRtZERkvyMWk1XHykokRLiLlwcI",
    authDomain: "kwitterdatabase-cb476.firebaseapp.com",
    databaseURL: "https://kwitterdatabase-cb476-default-rtdb.firebaseio.com",
    projectId: "kwitterdatabase-cb476",
    storageBucket: "kwitterdatabase-cb476.appspot.com",
    messagingSenderId: "274963781961",
    appId: "1:274963781961:web:6ff47503568a2939516298"
  };
  
firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function create_room()
{
    room_name = document.getElementById("room_name_input").value;
    room_name = room_name.replaceAll(" ", "_");

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    
    window.location = "kwitter_message.html";
}

function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        document.getElementById("output").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot) 
        { 
            childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='RedirectToRoom(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}

getData();

function RedirectToRoom(name)
{
    localStorage.setItem("room_name", name);
    window.location = "kwitter_message.html";
}