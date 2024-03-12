<template>
  <div>
    {{ msg }}
  </div>
  <button class="button" @click="showPrompt">
    showPrompt
  </button>
  <button class="button" @click="checkStatus">
    checkStatus
  </button>


</template>

<script setup lang="ts">
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { ref } from 'vue';

async function showPrompt() {
  const newToken = await getToken(messaging, {
    vapidKey,
  });
  msg.value = newToken;
}
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
const app = initializeApp(firebaseConfig);
const vapidKey = 'BJkYOzEplaeK4snOYdP9m2GT380XB8fKOfSBOVsbOY8S2vfwPzmeysZUC41p3lESHLzpYCxx9Il-t-WSGIp92ww';
const messaging = getMessaging(app);


onMessage(messaging, (payload) => {
  msg.value = 'Message received. ' + JSON.stringify(payload);
  // ...
});
async function checkStatus() {
  if (await Notification.requestPermission() === 'granted') {
    msg.value = 'Permission Granted, getting token...';
  } else {
    msg.value = 'No Permission';
  }

}

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
