import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";
export default function TabsLayout() {
    const PRIMARY = "#4F46E5";
    return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders/index"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" size={size} color={color} />
          ),
        }}
      />

        <Tabs.Screen
            name="profile/index"
            options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
            ),
            }}
        />
    </Tabs>
    )
}