var firebaseConfig = {

      apiKey: "AIzaSyB0k0rS1-IetYdnigJQANLiSkIch8f6PAQ",

      authDomain: "kwitter-f2199.firebaseapp.com",

      databaseURL: "https://kwitter-f2199-default-rtdb.firebaseio.com",

      projectId: "kwitter-f2199",

      storageBucket: "kwitter-f2199.appspot.com",

      messagingSenderId: "994760995589",

      appId: "1:994760995589:web:4bf3d9fafb2b6941dcfd6c"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
            console.log("Room Name -"+ Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() 
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding Room Name"      
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() 
{
localStorage.removeItem("user_name");      
localStorage.removeItem("room_name");
window.location = "index.html";
}