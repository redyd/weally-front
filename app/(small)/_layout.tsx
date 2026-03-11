import {Tabs} from "expo-router";
import {Colors} from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
            }}
        >
            <Tabs.Screen
                name="(shared)/index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="(shared)/planning"
                options={{
                    title: "Planning",
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused ? "calendar-clear" : "calendar-clear-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen name="(large)" options={{href: null}}/>
            <Tabs.Screen name="(small)" options={{href: null}}/>
        </Tabs>
    );
}