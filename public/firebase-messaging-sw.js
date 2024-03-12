// Import the firebase app / messaging packages
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);

// Initialize app

const app = firebase.initializeApp({
  apiKey: "AIzaSyBo5mlbSmaf0aSempfeMTY8RQeSBfgkQlc",
  authDomain: "testing-62acb.firebaseapp.com",
  projectId: "testing-62acb",
  storageBucket: "testing-62acb.appspot.com",
  messagingSenderId: "195165267631",
  appId: "1:195165267631:web:383052269d80aea630165a",
});

// Initialize messaging
const messaging = firebase.messaging();
// Listen to bg messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received a bg message: ", payload);

  const title = payload.notification.title;
  const notification = {
    body: "Notification Body",
    icon: "/icons/favicon-32x32.png",
  };

  // Show notification when message received
  self.registration.showNotification(title, notification);
});

// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts(
//   'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
// );
// // importScripts('https://app.primehire.com.au/service-worker.js');
// const firebaseConfig = {
//   apiKey: 'AIzaSyC7ekuGlWdr8sWkWBcMzlerN1xf6qkySco',
//   authDomain: 'pushprimehire.firebaseapp.com',
//   projectId: 'pushprimehire',
//   storageBucket: 'pushprimehire.appspot.com',
//   messagingSenderId: '33985431746',
//   appId: '1:33985431746:web:20f55bd458562149b0535b',
//   measurementId: 'G-0FJH4J4C16',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   // Customize notification here
//   const dataString = payload.data;
//   dataString.tag = 'uniqueTag';
//   dataString.renotify = true;
//   if (dataString.actions) {
//     dataString.actions = JSON.parse(dataString.actions);
//   }
//   if (dataString.requireInteraction) {
//     dataString.requireInteraction = true;
//   }
//   if (dataString.data) {
//     dataString.data = JSON.parse(dataString.data);
//   }
//   self.addEventListener('notificationclick', function (event) {
//     const url =
//       event?.notification?.data?.url || 'https://app.primehire.com.au';
//     event.notification.close(); // Android needs explicit close.

//     event.waitUntil(
//       clients
//         .matchAll({ type: 'window', includeUncontrolled: true })
//         .then((windowClients) => {
//           // Check if there is already a window/tab open with the target URL
//           for (let i = 0; i < windowClients.length; i++) {
//             const client = windowClients[i];
//             // If so, just focus it.
//             if (client.url === url && 'focus' in client) {
//               return client.focus();
//             }
//           }

//           // If not, then open the target URL in a new window/tab.
//           if (clients.openWindow) {
//             return clients.openWindow(url);
//           }
//         })
//     );
//   });

//   console.log('Sending notification!', dataString);
//   registration.showNotification(dataString.title, dataString);
// });
