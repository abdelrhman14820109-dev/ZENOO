importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAKqlRuchZWDkEEl5vtpmAC5hJWQRBpawU",
  authDomain: "zeno-store-ee3ef.firebaseapp.com",
  projectId: "zeno-store-ee3ef",
  storageBucket: "zeno-store-ee3ef.firebasestorage.app",
  messagingSenderId: "136187173794",
  appId: "1:136187173794:web:9f80dec9561bbd5b1cb0fb",
  measurementId: "G-GJT5QM7G03"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// معالجة واستقبال الإشعار والموقع مغلق
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'طلب جديد في ZENO Store!';
  const notificationOptions = {
    body: payload.notification?.body || 'وصلك طلب جديد، افتح اللوحة للتفاصيل.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
