import {Slot, Tabs} from "expo-router";
import {useIsLargeScreen} from "@/hooks/useIsLargeScreen";
import {Colors} from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    const isLargeScreen = useIsLargeScreen();

    if (isLargeScreen) {
        return <Slot/>
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
            }}
        >
            <Tabs.Screen
                name="index"
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
                name="planning"
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
            <Tabs.Screen
                name="account"
                options={{
                    title: "Mon compte",
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}