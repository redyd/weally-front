import {useWindowDimensions} from "react-native";
import {useMemo} from "react";

export function useIsLargeScreen(breakpoint = 768) {
    const {width} = useWindowDimensions();

    return useMemo(() => width >= breakpoint, [width, breakpoint]);
}