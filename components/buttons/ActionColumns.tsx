import {ReactNode} from "react";
import {View} from "react-native";

export default function ActionColumns({children}: { children: ReactNode }) {
    return (
        <View style={{
            width: "100%",
            gap: 12,
        }}>
            {children}
        </View>
    )
}