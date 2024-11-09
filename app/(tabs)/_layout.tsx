import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          // headerShown : false,
          title: "About",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="bank"
        options={{
          // headerShown : false,
          title: "Bank",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "cash" : "cash-outline"} color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="gojek"
        options={{
          // headerShown : false,
          title: "Gojek",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "bicycle" : "bicycle-outline"} color={color} size={24} />, // Using bicycle as an icon
        }}
      />
    </Tabs>
  );
}
