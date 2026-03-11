import TabsLayout from "@/app/(small)/_layout";
import SidebarLayout from "@/app/(large)/_layout";
import {useIsLargeScreen} from "@/hooks/useIsLargeScreen";

export default function RootLayout() {
    const isLargeScreen = useIsLargeScreen();

    if (isLargeScreen) {
        return <SidebarLayout/>;
    }

    return <TabsLayout/>;
}
