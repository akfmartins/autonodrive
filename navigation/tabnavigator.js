import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import HotZonesScreen from "../screens/HotZonesScreen";
import PerformanceScreen from "../screens/PerformanceScreen";
import MaintenanceScreen from "../screens/MaintenanceScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#FFD700",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Zonas Quentes"
        component={HotZonesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Desempenho"
        component={PerformanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Manutenção"
        component={MaintenanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
