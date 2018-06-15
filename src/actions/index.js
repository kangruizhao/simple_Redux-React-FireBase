var firebase = require("firebase");
var config = {
   apiKey: "AIzaSyBcsp6Ti8R7STc7N7fM2D5y2uerMzjcRBw",
   authDomain: "informations-d41f2.firebaseapp.com",
   databaseURL: "https://informations-d41f2.firebaseio.com",
   projectId: "informations-d41f2",
   storageBucket: "informations-d41f2.appspot.com",
   messagingSenderId: "54432884283"
 };
 firebase.initializeApp(config);
  export function getmessage() {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.

/*  const firebaseRef = firebase.database().ref('/messages');
    console.log(firebaseRef);
  var ref=null;
  const  firebaseCallback = firebaseRef.once('value').then(function(snap){
    console.log(snap);
    dispatch({
      type:"ALL_MESSAGES",
      payload:snap.val()
    });
  });*/

  return dispatch=>{
    const firebaseRef = firebase.database().ref("messages");
    console.log(firebaseRef);
     firebaseRef.once('value').then(function(snapshot){


        //console.log(snapshot);
        console.log(snapshot.val());
       dispatch({
         type:"ALL_MESSAGES",
         payload:snapshot.val()
       });
     });
  }

  }
  export function createPost(post) {
    console.log(post);
  return dispatch => firebase.database().ref("messages").push(post);
}

export function selectMessage(message) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return dispatch=>{
  console.log(message);
  dispatch( {
    type: "MESSAGE_SELECTED",
    payload: message
  });
}
}
