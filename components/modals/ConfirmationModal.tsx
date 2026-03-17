import {Modal, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator} from "react-native";
import {Colors, Fonts} from "@/constants/theme";

interface ConfirmationModalProps {
    visible: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    danger?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    isPending: boolean;
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
    const {
        visible,
        title,
        message,
        confirmLabel = 'Confirmer',
        cancelLabel = 'Annuler',
        danger = false,
        onConfirm,
        onCancel,
    } = props;

    if (props.isPending) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onCancel}
        >
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onCancel}>
                <TouchableOpacity activeOpacity={1} style={styles.modal}>

                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalSubtitle}>{message}</Text>

                    <View style={styles.modalActions}>
                        <TouchableOpacity
                            style={[styles.confirmButton, danger && styles.confirmButtonDanger]}
                            activeOpacity={0.85}
                            onPress={onConfirm}
                        >
                            <Text style={styles.confirmButtonText}>{confirmLabel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} activeOpacity={0.85} onPress={onCancel}>
                            <Text style={styles.cancelButtonText}>{cancelLabel}</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
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
        maxWidth: 400
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
    modalActions: {
        gap: 10,
        marginTop: 4,
    },
    confirmButton: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
    },
    confirmButtonDanger: {
        backgroundColor: Colors.primary,
        shadowColor: Colors.primary,
    },
    confirmButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.light_outline,
    },
    cancelButton: {
        backgroundColor: Colors.light_outline_gray,
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontFamily: Fonts.semiBold,
        fontSize: 15,
        color: Colors.dark_outline,
    }
});