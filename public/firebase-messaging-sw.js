// this file must be in root folder
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBo5mlbSmaf0aSempfeMTY8RQeSBfgkQlc",
  authDomain: "testing-62acb.firebaseapp.com",
  projectId: "testing-62acb",
  storageBucket: "testing-62acb.appspot.com",
  messagingSenderId: "195165267631",
  appId: "1:195165267631:web:383052269d80aea630165a",
};

// receiving messages in background
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// get this type of message in background
messaging.onBackgroundMessage(function (payload) {
  if (!payload.hasOwnProperty("notification")) {
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: payload.data.icon,
      image: payload.data.image,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
    self.addEventListener("notificationclick", function (event) {
      const clickedNotification = event.notification;
      clickedNotification.close();
      event.waitUntil(clients.openWindow(payload.data.click_action));
    });
  }
});
