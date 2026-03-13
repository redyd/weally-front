import {View, StyleSheet, Pressable, Text} from "react-native";
import {useIsLargeScreen} from "@/hooks/useIsLargeScreen";
import {router, usePathname, Href} from "expo-router";
import {Colors} from "@/constants/theme";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

/**
 * Layout that render or not the sidebar if its large screen.
 */
export function ResponsiveLayout({children}: { children: React.ReactNode }) {
    const isLargeScreen = useIsLargeScreen();

    if (!isLargeScreen) {
        return (
            <View style={styles.content}>
                {children}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <View>
                    <SidebarItem label="Home" route="/">
                        <Ionicons name="home-sharp" size={15} color="#000"/>
                    </SidebarItem>
                    <SidebarItem label="Planning" route="/planning">
                        <Ionicons name="calendar-clear" size={15} color="#000"/>
                    </SidebarItem>
                </View>
                <View style={styles.bottomItem}>
                    <SidebarItem label="Mon compte" route="/account">
                        <Ionicons name="person" size={15} color="#000"/>
                    </SidebarItem>
                </View>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

function SidebarItem({label, route, children}: { label: string; route: Href, children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === route;

    return (
        <Pressable
            onPress={() => router.push(route)}
            style={({hovered}) => [
                styles.item,
                hovered && styles.itemHover,
                isActive && styles.itemActive,
            ]}
        >
            {children}
            <Text style={styles.itemText}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "row"},
    sidebar: {
        width: 220,
        backgroundColor: Colors.lightOutline,
        borderRightWidth: 1,
        borderRightColor: Colors.darkOutline,
        padding: 20,
    },
    content: {
        flex: 1,
        padding: 20
    },
    item: {
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: 15
    },
    itemHover: {
        backgroundColor: Colors.secondary_light
    },
    itemActive: {
        backgroundColor: Colors.secondary
    },
    itemText: {
        color: Colors.darkOutline,
        fontSize: 16
    },
    bottomItem: {
        marginTop: "auto",
    }
});