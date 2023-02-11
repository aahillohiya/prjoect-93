var firebaseConfig = {
      apiKey: "AIzaSyAe-8KJCgVdqcGRyTpC-8KE2179kR3Ile4",
      authDomain: "lets-chat-31490.firebaseapp.com",
      projectId: "lets-chat-31490",
      storageBucket: "lets-chat-31490.appspot.com",
      messagingSenderId: "451640322379",
      appId: "1:451640322379:web:b1f80a935231bc050660ce"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ 
        purpose: "adding user"
  });
  }