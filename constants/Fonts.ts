export const Fonts = {
    // Family
    regular: 'System',
    bold: 'System',

    // Size
    sizes: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
        xxl: 20,
        title: 24,
        heading: 32,
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
    h1: {
        fontSize: Fonts.sizes.display,
        fontWeight: Fonts.weights.bold,
        lineHeight: Fonts.sizes.display * Fonts.lineHeights.tight,
    },
    h2: {
        fontSize: Fonts.sizes.heading,
        fontWeight: Fonts.weights.bold,
        lineHeight: Fonts.sizes.heading * Fonts.lineHeights.tight,
    },
    h3: {
        fontSize: Fonts.sizes.title,
        fontWeight: Fonts.weights.semiBold,
        lineHeight: Fonts.sizes.title * Fonts.lineHeights.normal,
    },
    body: {
        fontSize: Fonts.sizes.md,
        fontWeight: Fonts.weights.regular,
        lineHeight: Fonts.sizes.md * Fonts.lineHeights.normal,
    },
    bodyLarge: {
        fontSize: Fonts.sizes.lg,
        fontWeight: Fonts.weights.regular,
        lineHeight: Fonts.sizes.lg * Fonts.lineHeights.normal,
    },
    caption: {
        fontSize: Fonts.sizes.sm,
        fontWeight: Fonts.weights.regular,
        lineHeight: Fonts.sizes.sm * Fonts.lineHeights.normal,
    },
};