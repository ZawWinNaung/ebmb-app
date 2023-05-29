import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
    getFCMToken();
  }
}

async function getFCMToken() {
  try {
    const _fcmToken = await messaging().getToken();
    if (_fcmToken) {
      console.log("fcm token--->", _fcmToken);
    }
  } catch (error) {
    console.log(error, "error in fcm token");
  }
}

export const NotificationListener = () => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
  });

  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
      }
    });

  messaging().onMessage(async (remoteMessage) => {
    console.log("notification on foreground state.....", remoteMessage);
  });
};
