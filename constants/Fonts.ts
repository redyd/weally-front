export const Fonts = {
    // Family
    regular: 'Manrope',
    bold: 'ManropeBold',

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

    // Weights
    weights: {
        light: '300' as const,
        regular: '400' as const,
        medium: '500' as const,
        semiBold: '600' as const,
        bold: '700' as const,
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
        fontWeight: Fonts.weights.bold,
        lineHeight: Fonts.sizes.heading * Fonts.lineHeights.tight,
        fontFamily: Fonts.regular,
    },
};