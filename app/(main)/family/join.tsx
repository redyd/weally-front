import {View, TextInput, Text, ActivityIndicator, StyleSheet} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {useMe} from "@/hooks/useMe";
import PrimaryLargeButton from "@/components/buttons/PrimaryLargeButton";
import SecondaryLargeButton from "@/components/buttons/SecondaryLargeButton";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import {useLeaveFamily} from "@/hooks/useLeaveFamily";
import {useQueryClient} from "@tanstack/react-query";
import {ResponsiveLayout} from "@/components/layouts/ResponsiveLayout";
import Eyebrow from "@/components/texts/eyebrow";
import {Colors, Fonts} from "@/constants/theme";
import {useJoinFamily} from "@/hooks/useJoinFamily";
import {ApiError} from "@/lib/api";
import ActionColumns from "@/components/buttons/ActionColumns";

export default function Join() {
    const {data: me, isLoading: meLoading} = useMe();
    const queryClient = useQueryClient();

    const {action, code} = useLocalSearchParams<{ action: 'create' | 'join', code?: string }>();
    const [inviteCode, setInviteCode] = useState(code ?? '');
    const [error, setError] = useState<string>("");

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

    const {mutate: joinFamily} = useJoinFamily({
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['me'] });
            router.replace("/(main)/(tabs)");
        },
        onError: (error: any) => {
            if (error instanceof ApiError) {
                switch (error.status) {
                    case 404:
                        setError("Code introuvable")
                        break;
                    case 410:
                        setError("Ce code est expiré")
                        break;
                    default:
                        setError("Code invalide")
                }
            } else {
                setError("Impossible de rejoindre cette famille pour l'instant");
            }
        }
    })

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

    const handleOnJoin = async () => {
        if (!inviteCode) {
            return;
        }

        joinFamily(inviteCode);
    }

    useEffect(() => {
        if (code) setInviteCode(code)
    }, [code])


    if (meLoading) {
        return <ActivityIndicator/>;
    }

    if (me?.family) {
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
        );
    }

    return (
        <ResponsiveLayout>
            <View style={styles.container}>
                {action === 'join' && (
                    <View style={styles.spacer}>
                        <View>
                            <Eyebrow title="Code" eyebrow="Rejoindre une famille"/>
                            <TextInput
                                value={inviteCode}
                                onChangeText={setInviteCode}
                                placeholder="Code d'invitation"
                                autoFocus={!code}
                                autoCapitalize="characters"
                                style={styles.input}
                            />
                            {error && (
                                <Text style={styles.errorText}>{error}</Text>
                            )}
                        </View>
                        <PrimaryLargeButton
                            text="Rejoindre"
                            onPress={handleOnJoin}
                        />
                    </View>
                )}
                {action === 'create' && (
                    <View>
                        <Eyebrow title="Nouvelle famille" eyebrow="Créer une famille"/>
                    </View>
                )}
            </View>
        </ResponsiveLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.dark_outline,
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    spacer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 16
    },
    errorText: {
        padding: 5,
        color: Colors.primary,
        fontSize: 14,
        fontFamily: Fonts.regular,
    },
    warnText: {
        fontSize: 16,
        color: Colors.dark_outline,
        fontFamily: Fonts.semiBold,
    }
})