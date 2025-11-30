import {Colors} from "@/constants/Colors";

export const Fonts = {
    // Family
    regular: 'Manrope',
    bold: 'ManropeBold',
    extrabold: 'ManropeExtraBold',

    // Size
    sizes: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
        xxl: 20,
        title: 24,
        heading: 28,
        display: 40,
    },

    // Line heights
    lineHeights: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.8,
    },
};

// Predefine styles
export const TextStyles = {
    mainTitle: {
        fontSize: Fonts.sizes.heading,
        lineHeight: Fonts.sizes.heading * Fonts.lineHeights.tight,
        fontFamily: Fonts.extrabold,
        color: Colors.primary
    },
    subTitle: {
        fontSize: Fonts.sizes.xxl,
        lineHeight: Fonts.sizes.xxl * Fonts.lineHeights.tight,
        fontFamily: Fonts.regular,
        color: Colors.textSecondary,
    },
    important: {
        fontSize: Fonts.sizes.xl,

    },
    descriptive: {

    }
};