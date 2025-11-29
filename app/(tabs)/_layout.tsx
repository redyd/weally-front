import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "@/constants";

/**
 * Define the base tabs layout for the application.
 * @constructor
 */
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.tabBarActive,
                tabBarInactiveTintColor: Colors.tabBarInactive,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.tabBarBackground,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="meals"
                options={{
                    title: 'Meals',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="restaurant" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}