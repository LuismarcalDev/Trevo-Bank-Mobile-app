import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Interface from './Interface';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Interface"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Interface: 'home-outline',
            Configurações: 'settings-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Interface" component={Interface} />
   
    </Tab.Navigator>
  );
}
