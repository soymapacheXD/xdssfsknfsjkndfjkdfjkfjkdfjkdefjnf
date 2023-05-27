var firebaseConfig = {
    apiKey: "AIzaSyCW7_Xkos1kbiMHllTo7bySiqLbsrDzboU",
    authDomain: "proyecto-abe30.firebaseapp.com",
    databaseURL: "https://proyecto-abe30-default-rtdb.firebaseio.com",
    projectId: "proyecto-abe30",
    storageBucket: "proyecto-abe30.appspot.com",
    messagingSenderId: "935803221207",
    appId: "1:935803221207:web:feb8183c3e012589866c92"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser (){
    user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).udpate({
purpose:"added_gato"
    });
}