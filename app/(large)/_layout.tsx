import {View, Text, StyleSheet, Pressable} from "react-native";
import {Slot, router, usePathname, Href} from "expo-router";
import {Colors} from "@/constants/theme";

export default function SidebarLayout() {
    return (
        <View style={styles.container}>
            <View style={styles.container_view}>
                <Item label="Home" route="/"/>
                <Item label="Planning" route="/planning"/>
            </View>

            <View style={styles.slot}>
                <Slot/>
            </View>
        </View>
    );
}

export function Item({label, route}: { label: string; route: Href }) {
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
    container: {
        flex: 1,
        flexDirection: "row",
    },

    container_view: {
        backgroundColor: Colors.lightOutline,
        borderRightWidth: 1,
        borderRightColor: Colors.darkOutline,
        borderColor: Colors.darkOutline,
        width: 220,
        padding: 20,
    },

    item: {
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    itemHover: {
        backgroundColor: Colors.accent,
    },

    itemActive: {
        backgroundColor: Colors.primary,
    },

    itemText: {
        color: Colors.darkOutline,
        fontSize: 16,
    },

    slot: {
        flex: 1,
        padding: 20,
    }
});