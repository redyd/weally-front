import {
    Text,
    StyleSheet,
    ActivityIndicator,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {ResponsiveLayout} from "@/components/layouts/ResponsiveLayout";
import {Colors, Fonts} from "@/constants/theme";
import {useMe} from "@/hooks/useMe";
import Avatar from "@/components/icons/Avatar";
import {useInvitationCode} from "@/hooks/useInvitationCode";
import {useState} from "react";
import InvitationModal from "@/components/modals/InvitationModal";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
import {useLeaveFamily} from "@/hooks/useLeaveFamily";
import {useQueryClient} from "@tanstack/react-query";
import {FontAwesome} from "@expo/vector-icons";
import AlertButton from "@/components/buttons/AlertButton";
import NoFamily from "@/components/page-components/NoFamily";
import Eyebrow from "@/components/texts/eyebrow";

export default function FamilyHome() {
    const queryClient = useQueryClient();

    // user & family data
    const {data: me, isLoading: meLoading} = useMe();

    // invitation modal
    const [invitationModalVisible, setInvitationModalVisible] = useState(false);
    const {
        mutate: createInvitation,
        data: invitation,
        isPending: isInvitationPending,
        reset: resetInvitation
    } = useInvitationCode();

    // leave family modal
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

    const handleOpenInvitation = () => {
        resetInvitation();
        setInvitationModalVisible(true);
        createInvitation();
    };

    const handleCloseInvitation = () => {
        setInvitationModalVisible(false);
    };

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

    if (meLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={Colors.primary}/>
            </View>
        );
    }

    return (
        <ResponsiveLayout>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <Eyebrow
                            title={me?.family?.name ?? 'Aucune'}
                            eyebrow="Ma famille"/>
                        {me?.family && (
                            <TouchableOpacity
                                style={styles.shareButton}
                                activeOpacity={0.8}
                                onPress={handleOpenInvitation}
                            >
                                <FontAwesome name="share-alt" size={24} color={Colors.secondary}/>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* Empty state */}
                {!me?.family && (
                    <NoFamily/>
                )}

                {/* Family view */}
                {me?.family && (
                    <View style={styles.familyContainer}>

                        {/* Members */}
                        <Text style={styles.sectionTitle}>
                            Membres · {me.family.familyMembers.length}
                        </Text>

                        <View style={styles.membersList}>
                            {me.family.familyMembers.map((member, index) => (
                                <View key={index} style={styles.memberRow}>
                                    <Avatar size={48} image={member.image} name={member.name}/>
                                    <View style={styles.memberInfo}>
                                        <Text style={styles.memberName}>{member.name}</Text>
                                        <Text style={styles.memberRole}>
                                            {member.role.charAt(0) + member.role.slice(1).toLowerCase()}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        {/* Leave button */}
                        <AlertButton text="Quitter la famille" onPress={handleOpenLeaveFamily} icon="suitcase-rolling"/>
                    </View>
                )}
            </ScrollView>

            <InvitationModal
                invitation={invitation}
                isPending={isInvitationPending}
                handleClose={handleCloseInvitation}
                visible={invitationModalVisible}/>

            <ConfirmationModal
                visible={leaveFamilyModalVisible}
                isPending={isLeavePending}
                title="Quitter la famille"
                message="Êtes vous sûr de vouloir quitter la famille ?"
                onConfirm={handleConfirmLeaveFamily}
                onCancel={handleCloseLeaveFamily}/>
        </ResponsiveLayout>
    );
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light_outline,
    },
    scrollContent: {
        paddingBottom: 40,
    },

    // Header
    header: {
        paddingTop: 16,
        paddingBottom: 28,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    shareButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.accent,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: Colors.secondary_light,
    },

    // Family
    familyContainer: {
        gap: 24,
    },

    // Members
    sectionTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: 13,
        color: Colors.primary_light,
        letterSpacing: 1.2,
        textTransform: "uppercase",
    },
    membersList: {
        gap: 12,
    },
    memberRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.light_outline_gray,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 14,
    },
    memberInfo: {
        flex: 1,
    },
    memberName: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.dark_outline,
    },
    memberRole: {
        fontFamily: Fonts.regular,
        fontSize: 12,
        color: Colors.primary_light,
        marginTop: 2,
    },
});