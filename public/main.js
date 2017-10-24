if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
});


/* This function takes a git command, makes an fake input field
 * and then copy it to the clipboard for use.
 */
function copyOnClick(el) {
  var pre = el.getElementsByTagName('pre')[0].innerHTML;
  let input = document.createElement("input");
  document.body.append(input);
  input.setAttribute('value', pre);
  input.select();
  var copy = document.execCommand("copy");
  input.remove();

  //If is sucessfully copied to clipboard, alert "Copied!"
  if(copy != ""){
    showInfo("Copied!")
  }else{
    showInfo("Not copied, please refresh page and try again!");
  }
}

function showInfo(message) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(message);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(message);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

function renderBoxComponent() {
  var ComponentProto = Object.create(HTMLElement.prototype);
  ComponentProto.createdCallback = function() {

    this.innerHTML = '' +
    '<div class="box" onclick="copyOnClick(this)">' +
    '<h2 class="title">'+ this.getAttribute('data-title') +'<span class="tooltip">Click to copy</span></h2>' +
    '<pre>'+ this.getAttribute('data-code') +'</pre>' +
    '</div>';
  
  };
  var Component = document.registerElement('box-component', {prototype: ComponentProto});
}

renderBoxComponent();