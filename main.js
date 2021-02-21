//Firebase initialization
var firebaseConfig = {
    apiKey: "AIzaSyDx53aUXDqxRZscjbcRf8yOMG2hyvzgAVM",
    authDomain: "contact-form-f81a1.firebaseapp.com",
    projectId: "contact-form-f81a1",
    storageBucket: "contact-form-f81a1.appspot.com",
    messagingSenderId: "191992372712",
    appId: "1:191992372712:web:760a1d379e67241f39d85d",
    measurementId: "G-DEG44JP9NY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

//Refernece to messages collection
//var messageRef=firebase.database.ref('messages');
var messageRef= firebase.database().ref('messages');

//Actions on clicking the submit button
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var company=document.getElementById('company').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;
    saveMessage(name,company,email,phone,message);
    console.log("saved details");

}

//save messages to firebase
function saveMessage(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
      name:name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
}