// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDKghwT-NpxcDA0U9uhE_S0-YkIeWanixY",
    authDomain: "kwitter-4c789.firebaseapp.com",
    databaseURL: "https://kwitter-4c789-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c789",
    storageBucket: "kwitter-4c789.appspot.com",
    messagingSenderId: "665588899591",
    appId: "1:665588899591:web:c3ce3052dc3d544305afa2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
*/
localStorage.setItem("user_name", user_name);
window.location = "chat_room.html";
}




