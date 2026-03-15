import {ActivityIndicator, Modal, Text, TouchableOpacity, View, StyleSheet, Share} from "react-native";
import {Colors, Fonts} from "@/constants/theme";
import {Invitation} from "@/types/api.types";

interface InvitationModalProps {
    invitation: Invitation | undefined;
    isPending: boolean;
    visible: boolean;
    handleClose: () => void;
}

export default function InvitationModal(props: InvitationModalProps) {
    const handleShare = () => {
        if (!props.invitation?.code) return;
        Share.share({ message: `Rejoins ma famille avec ce code : ${props.invitation.code}` });
    };

    return (
        <Modal
            visible={props.visible}
            transparent
            animationType="fade"
            onRequestClose={props.handleClose}
        >
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={props.handleClose}>
                <TouchableOpacity activeOpacity={1} style={styles.modal}>

                    <Text style={styles.modalTitle}>Code d&#39;invitation</Text>
                    <Text style={styles.modalSubtitle}>
                        Partage ce code pour inviter quelqu&#39;un dans ta famille
                    </Text>

                    {/* Code */}
                    <View style={styles.codeContainer}>
                        {props.isPending ? (
                            <ActivityIndicator color={Colors.primary} />
                        ) : (
                            <Text style={styles.codeText}>
                                {props.invitation?.code ?? '—'}
                            </Text>
                        )}
                    </View>

                    {/* Expiration */}
                    {props.invitation?.expiresAt && (
                        <Text style={styles.expiresText}>
                            Expire le {new Date(props.invitation.expiresAt).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
                        })}
                        </Text>
                    )}

                    {/* Actions */}
                    <View style={styles.modalActions}>
                        <TouchableOpacity
                            style={styles.shareButton}
                            activeOpacity={0.85}
                            onPress={handleShare}
                            disabled={!props.invitation?.code}
                        >
                            <Text style={styles.shareButtonText}>Partager</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} activeOpacity={0.85} onPress={props.handleClose}>
                            <Text style={styles.closeButtonText}>Fermer</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    modal: {
        backgroundColor: Colors.light_outline,
        borderRadius: 24,
        padding: 28,
        width: '100%',
        gap: 16,
    },
    modalTitle: {
        fontFamily: Fonts.bold,
        fontSize: 22,
        color: Colors.dark_outline,
        letterSpacing: -0.3,
    },
    modalSubtitle: {
        fontFamily: Fonts.regular,
        fontSize: 13,
        color: Colors.primary_light,
        lineHeight: 18,
    },
    codeContainer: {
        backgroundColor: Colors.accent,
        borderRadius: 16,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 80,
    },
    codeText: {
        fontFamily: Fonts.bold,
        fontSize: 36,
        color: Colors.primary,
        letterSpacing: 6,
    },
    expiresText: {
        fontFamily: Fonts.regular,
        fontSize: 12,
        color: Colors.primary_light,
        textAlign: 'center',
    },
    modalActions: {
        gap: 10,
        marginTop: 4,
    },
    shareButton: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
    },
    shareButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.light_outline,
    },
    closeButton: {
        backgroundColor: Colors.light_outline_gray,
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
    },
    closeButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.dark_outline,
    },
})