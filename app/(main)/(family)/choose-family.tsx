import {View, TextInput, Text, ActivityIndicator} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {useMe} from "@/hooks/useMe";
import PrimaryLargeButton from "@/components/buttons/PrimaryLargeButton";
import SecondaryLargeButton from "@/components/buttons/SecondaryLargeButton";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import {useLeaveFamily} from "@/hooks/useLeaveFamily";
import {useQueryClient} from "@tanstack/react-query";

export default function ChooseFamily() {
    const {data: me, isLoading: meLoading} = useMe();
    const queryClient = useQueryClient();

    const {action, code} = useLocalSearchParams<{ action: 'create' | 'join', code?: string }>();
    const [inviteCode, setInviteCode] = useState(code ?? '');

    const [leaveFamilyModalVisible, setLeaveFamilyModalVisible] = useState(false);
    const {mutate: leaveFamily, isPending: isLeavePending, reset: resetLeave} = useLeaveFamily({
        onSuccess: () => {
            setLeaveFamilyModalVisible(false)
            queryClient.invalidateQueries({queryKey: ['me']})
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

    useEffect(() => {
        if (code) setInviteCode(code)
    }, [code])


    if (meLoading) {
        return <ActivityIndicator/>;
    }

    if (me?.family) {
        return (
            <View>
                <Text>Vous appartenez déjà à une famille. Quittez la pour rejoindre cette famille</Text>
                <PrimaryLargeButton text="Quitter ma famille" onPress={handleOpenLeaveFamily} />
                <SecondaryLargeButton text="Revenir en lieu sûr"/>
                <ConfirmationModal
                    visible={leaveFamilyModalVisible}
                    title="Quitter ma famille"
                    message="Êtes vous sûr de vouloir quitter votre famille ?"
                    onConfirm={handleConfirmLeaveFamily}
                    onCancel={handleCloseLeaveFamily}
                    isPending={isLeavePending}/>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            {action === 'join' && (
                <TextInput
                    value={inviteCode}
                    onChangeText={setInviteCode}
                    placeholder="Code d'invitation"
                    autoFocus={!code}
                    autoCapitalize="characters"
                />
            )}
        </View>
    )
}