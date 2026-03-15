import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function ChooseFamily() {
    const { action } = useLocalSearchParams<{ action: 'create' | 'join' }>();

    console.log(action);

    return (
        <View style={{ flex: 1 }}>
            <Text>ChooseFamily</Text>
        </View>
    )
}