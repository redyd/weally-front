import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/**
 * Define the base tabs layout for the application.
 * @constructor
 */
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#f4511e',
                tabBarInactiveTintColor: '#888',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
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