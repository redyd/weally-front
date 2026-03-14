import {
    Text,
    StyleSheet,
    ActivityIndicator,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { ResponsiveLayout } from "@/components/ResponsiveLayout";
import { Colors, Fonts } from "@/constants/theme";
import { useMe } from "@/hooks/useMe";
import Avatar from "@/components/Avatar";

export default function FamilyHome() {
    const { data: me, isLoading: meLoading } = useMe();

    const invitation = function () {

    }

    if (meLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={Colors.primary} />
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
                    <Text style={styles.eyebrow}>Ma famille</Text>
                    <Text style={styles.title}>{me?.family?.name}</Text>
                </View>

                {/* Empty state */}
                {!me?.family && (
                    <View style={styles.emptyState}>
                        <View style={styles.emptyIconContainer}>
                            <Text style={styles.emptyIcon}>🏠</Text>
                        </View>
                        <Text style={styles.emptyTitle}>Pas encore de famille</Text>
                        <Text style={styles.emptySubtitle}>
                            Crée ta famille ou rejoins celle d&#39;un proche
                        </Text>

                        <View style={styles.actionsColumn}>
                            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
                                <Text style={styles.primaryButtonText}>Créer ma famille</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}>
                                <Text style={styles.secondaryButtonText}>Rejoindre une famille</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                                    <Avatar size={48} image={member.image} name={member.name} />
                                    <View style={styles.memberInfo}>
                                        <Text style={styles.memberName}>{member.name}</Text>
                                        <Text style={styles.memberRole}>
                                            {member.role.charAt(0) + member.role.slice(1).toLowerCase()}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        {/* Invite button */}
                        <TouchableOpacity style={styles.inviteButton} activeOpacity={0.85} onPress={invitation}>
                            <Text style={styles.inviteIcon}>＋</Text>
                            <Text style={styles.inviteButtonText}>Créer un code d&#39;invitation</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
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
    eyebrow: {
        fontFamily: Fonts.medium,
        fontSize: 13,
        color: Colors.secondary,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        marginBottom: 4,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        color: Colors.dark_outline,
        letterSpacing: -0.5,
    },

    // Empty state
    emptyState: {
        alignItems: "center",
        paddingTop: 32,
        paddingHorizontal: 8,
    },
    emptyIconContainer: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: Colors.accent,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    emptyIcon: {
        fontSize: 36,
    },
    emptyTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: 20,
        color: Colors.dark_outline,
        marginBottom: 8,
        textAlign: "center",
    },
    emptySubtitle: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.primary_light,
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 36,
        maxWidth: 260,
    },
    actionsColumn: {
        width: "100%",
        gap: 12,
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    primaryButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.light_outline,
        letterSpacing: 0.2,
    },
    secondaryButton: {
        backgroundColor: Colors.light_outline_gray,
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: "center",
    },
    secondaryButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.dark_outline,
        letterSpacing: 0.2,
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

    // Invite
    inviteButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderWidth: 1.5,
        borderColor: Colors.secondary_light,
        borderRadius: 14,
        borderStyle: "dashed",
        paddingVertical: 16,
        backgroundColor: Colors.accent,
    },
    inviteIcon: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: Fonts.medium,
    },
    inviteButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 14,
        color: Colors.secondary,
    },
});