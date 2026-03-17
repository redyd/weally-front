import {StyleSheet, Text, View} from "react-native";
import ActionColumns from "@/components/buttons/ActionColumns";
import PrimaryLargeButton from "@/components/buttons/PrimaryLargeButton";
import SecondaryLargeButton from "@/components/buttons/SecondaryLargeButton";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import {ResponsiveLayout} from "@/components/layouts/ResponsiveLayout";
import {Colors, Fonts} from "@/constants/theme";
import {router} from "expo-router";
import {useLeaveFamily} from "@/hooks/useLeaveFamily";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

export default function JoinFamilyWarn() {
    const [leaveFamilyModalVisible, setLeaveFamilyModalVisible] = useState(false);

    const queryClient = useQueryClient();
    const {mutate: leaveFamily, isPending: isLeavePending, reset: resetLeave} = useLeaveFamily({
        onSuccess: async () => {
            setLeaveFamilyModalVisible(false)
            await queryClient.invalidateQueries({queryKey: ['me']})
            router.replace({pathname: "/(main)/family/join", params: {action: 'join'}});
        },
        onError: (error) => {
            console.error("Leave family failed", error)
        }
    });

    const handleOpenLeaveFamily = () => {
        setLeaveFamilyModalVisible(true);
    }

    const handleConfirmLeaveFamily = () => {
        resetLeave();
        leaveFamily();
    }

    const handleCloseLeaveFamily = () => {
        setLeaveFamilyModalVisible(false);
    }

    const handleCancelOperation = () => {
        router.replace("/(main)/(tabs)");
    }

    return (
        <ResponsiveLayout>
            <View style={styles.spacer}>
                <Text style={styles.warnText}>Vous appartenez déjà à une famille. Quittez la pour rejoindre cette famille</Text>
                <ActionColumns>
                    <PrimaryLargeButton text="Quitter ma famille" onPress={handleOpenLeaveFamily}/>
                    <SecondaryLargeButton text="Revenir en lieu sûr" onPress={handleCancelOperation}/>
                </ActionColumns>
                <ConfirmationModal
                    visible={leaveFamilyModalVisible}
                    title="Quitter ma famille"
                    message="Êtes vous sûr de vouloir quitter votre famille ?"
                    onConfirm={handleConfirmLeaveFamily}
                    onCancel={handleCloseLeaveFamily}
                    isPending={isLeavePending}/>
            </View>
        </ResponsiveLayout>
    )
}

const styles = StyleSheet.create({
    spacer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 16
    },
    warnText: {
        fontSize: 16,
        color: Colors.dark_outline,
        fontFamily: Fonts.semiBold,
    }
})