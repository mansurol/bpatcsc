import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import usePushNotifications from "./usePushNotifications";
import TabNav from "./Navigation/TabNav";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const { expoPushToken, notification } = usePushNotifications();
  console.log("expoPushToken", expoPushToken);
  const data = JSON.stringify(notification, undefined, 2);
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
