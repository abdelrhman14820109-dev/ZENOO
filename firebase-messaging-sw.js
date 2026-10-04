importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  projectId: "zeno-store-ee3ef",
  messagingSenderId: "136187173794",
  appId: "1:136187173794:web:9f80dec9561bbd5b1cb0fb"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// معالجة واستقبال الإشعار والموقع مغلق
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // يمكنك تغيير اسم ملف الأيقونة إذا أردت
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
