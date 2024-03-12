<template>
  <div style="width: 100%;">
    {{ msg }}
  </div>
  <div class="message" style="width: 100%;">

  </div>
  <button class="button" @click="checkStatus">
    checkStatus
  </button>


</template>

<script setup lang="ts">
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getToken } from "firebase/messaging";
import { ref } from 'vue';


const msg = ref('Hello Vue 3 + Vite + Firebase!');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5mlbSmaf0aSempfeMTY8RQeSBfgkQlc",
  authDomain: "testing-62acb.firebaseapp.com",
  projectId: "testing-62acb",
  storageBucket: "testing-62acb.appspot.com",
  messagingSenderId: "195165267631",
  appId: "1:195165267631:web:383052269d80aea630165a"
};

// Initialize Firebase
(window as any).firebase.initializeApp(firebaseConfig);
const vapidKey = 'BJkYOzEplaeK4snOYdP9m2GT380XB8fKOfSBOVsbOY8S2vfwPzmeysZUC41p3lESHLzpYCxx9Il-t-WSGIp92ww';
const messaging = (window as any).firebase.messaging()
// const messaging = getMessaging(app);

async function checkStatus() {
  messaging.getToken({ vapidKey }).then((currentToken: string) => {
    if (currentToken) {
      console.log(currentToken);
      document.querySelector('body')!.append(currentToken)
      msg.value = currentToken;
    }
  })
}
messaging.onMessage((payload: string) => {
  // if app is open and focus then notification data will receive here
  // keep in mind if message receive here, it will not notify in background
  // so here, use the message data however you want
  console.log('Message received ', payload);
  const messagesElement = document.querySelector('.message')!;
  const dataHeaderElement = document.createElement('h5');
  const dataElement = document.createElement('pre')!;
  (dataElement as any).style = "overflow-x: hidden;"
  dataHeaderElement.textContent = "Message Received:"
  dataElement.textContent = JSON.stringify(payload, null, 2)
  messagesElement.appendChild(dataHeaderElement)
  messagesElement.appendChild(dataElement)
})

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
