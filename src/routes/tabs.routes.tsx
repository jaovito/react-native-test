import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import School, { Message } from '../screens/School';
import theme from '../styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

type RouteParams = {
  allMessages: Message[];
};

export function TabsRoutes() {
  const { params } = useRoute();
  const route = params as RouteParams;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.colors.tabBar.background,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          flex: 0,
          width: 24,
          height: 30,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarInactiveTintColor: theme.colors.tabBar.inactiveTintColor,
        tabBarActiveTintColor: theme.colors.tabBar.tintColor,
      }}
    >
      <Screen
        name="News"
        component={School}
        initialParams={route}
        options={{
          tabBarLabel: 'Notícias',
          tabBarIcon: ({ size, color, focused }) => (
            <Entypo name="newsletter" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Writing"
        component={School}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Entypo name="folder-video" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Menu"
        component={School}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Arriving"
        component={School}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={School}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
