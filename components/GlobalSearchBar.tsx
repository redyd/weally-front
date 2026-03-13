import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors, Fonts} from "@/constants/theme";

export default function GlobalSearchBar() {
    const [search, setSearch] = useState("");

    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={18} color={Colors.darkOutline} />
            <TextInput
                style={styles.input}
                placeholder="Rechercher..."
                placeholderTextColor={Colors.darkOutline}
                value={search}
                onChangeText={setSearch}
                returnKeyType="search"
                clearButtonMode="while-editing"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.accent,
        borderRadius: 12,
        paddingHorizontal: 12,
        gap: 8,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: Colors.darkOutline,
        fontFamily: Fonts.regular,
    },
});