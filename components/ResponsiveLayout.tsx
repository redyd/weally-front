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
        return <>{children}</>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <View>
                    <SidebarItem label="Home" route="/" icon="home-sharp"/>
                    <SidebarItem label="Planning" route="/planning" icon="calendar-clear"/>
                </View>
                <View style={styles.bottomItem}>
                    <SidebarItem label="Mon compte" route="/account" icon="person"/>
                </View>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

function SidebarItem({label, route, icon}: { label: string; route: Href, icon: string }) {
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
            <Ionicons name={icon} size={15} color="#000"/>
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