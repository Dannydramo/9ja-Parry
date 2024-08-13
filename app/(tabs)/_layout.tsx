import { AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FC7210',
                tabBarStyle: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop:10,
                    paddingBottom:10,
                    height:60
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <AntDesign size={28} name="bars" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    title: 'My Events',
                    tabBarIcon: ({ color }) => (
                      <EvilIcons
                      size={30}
                      name="calendar"
                      color={color}
                  />
                    ),
                }}
            />
              <Tabs.Screen
                name="messages"
                options={{
                    title: 'Message',
                    tabBarIcon: ({ color }) => (
                      <AntDesign
                      size={28}
                      name="message1"
                      color={color}
                  />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                      <AntDesign
                      size={28}
                      name="user"
                      color={color}
                  />
                    ),
                }}
            />
        </Tabs>
    );
}
