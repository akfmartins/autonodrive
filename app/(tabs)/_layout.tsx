import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6200ee", // Cor quando a aba está ativa
        tabBarInactiveTintColor: "#888", // Cor quando está inativa
        tabBarStyle: { backgroundColor: "#ffffff" }, // Fundo da barra
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarefas"
        options={{
          title: "Tarefas",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="check-square" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progresso"
        options={{
          title: "Progresso",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="line-chart" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hotzones"
        options={{
          title: "Zonas Quentes",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
