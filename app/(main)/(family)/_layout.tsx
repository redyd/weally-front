import {Colors, Fonts} from "@/constants/theme";
import {Stack} from "expo-router";

export default function FamilyLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTitle: 'Retour',
                headerTintColor: Colors.secondary,
                headerTitleStyle: {
                    fontFamily: Fonts.semiBold
                },
                headerShadowVisible: false,
            }}
        />
    );
}