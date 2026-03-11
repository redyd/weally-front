import {View, StyleSheet, Pressable, Text} from "react-native";
import {useIsLargeScreen} from "@/hooks/useIsLargeScreen";
import {router, usePathname, Href} from "expo-router";
import {Colors} from "@/constants/theme";
import React from "react";

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
                <SidebarItem label="Home" route="/"/>
                <SidebarItem label="Planning" route="/planning"/>
                <SidebarItem label="Mon compte" route="/account"/>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

function SidebarItem({label, route}: { label: string; route: Href }) {
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
    content: {flex: 1, padding: 20},
    item: {padding: 12, borderRadius: 8, marginBottom: 8},
    itemHover: {backgroundColor: Colors.accent},
    itemActive: {backgroundColor: Colors.primary},
    itemText: {color: Colors.darkOutline, fontSize: 16},
});