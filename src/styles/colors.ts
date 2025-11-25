// Color palette for Gates of Ocean Ridge
export const colors = {
  // Primary brand colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe', 
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main brand blue
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  
  // Neutral grays
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  },
  
  // Accent colors
  green: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Main green for sustainability
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b'
  },
  
  // Supporting colors
  purple: {
    500: '#8b5cf6', // Recreation
    600: '#7c3aed'
  },
  
  // Status colors
  white: '#ffffff',
  black: '#000000'
}

// Semantic color mapping
export const semanticColors = {
  // Text colors
  text: {
    primary: colors.neutral[900],    // #171717
    secondary: colors.neutral[600],  // #525252
    muted: colors.neutral[500],      // #737373
    inverse: colors.white
  },
  
  // Background colors
  background: {
    primary: colors.white,
    secondary: colors.neutral[50],   // #fafafa
    muted: colors.neutral[100]       // #f5f5f5
  },
  
  // Brand colors
  brand: {
    primary: colors.primary[600],    // #0284c7
    secondary: colors.green[600],    // #059669
    accent: colors.purple[600]       // #7c3aed
  },
  
  // Category colors
  categories: {
    security: colors.primary[600],   // #0284c7
    recreation: colors.purple[600],  // #7c3aed  
    infrastructure: colors.neutral[600], // #525252
    sustainability: colors.green[600]    // #059669
  }
}