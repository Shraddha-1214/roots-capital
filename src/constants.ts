/**
 * Wealth Advisory Theme Constants
 */

// Color Palette
export const COLORS = {
  // Primary - Nude/Beige Palette
  NUDE_LIGHT: '#FDFCFB',    // Softest background
  NUDE_BASE: '#F5F2ED',     // Standard nude
  NUDE_DARK: '#E8E2D9',     // For methodology background
  
  // Brand Accent
  MAROON: '#5E1214',        // Keeping your legacy maroon
  GOLD_MUTED: '#B69354',    // Muted gold for accents
  
  // Text
  CHARCOAL: '#2D3436',      
  SLATE_600: '#475569',
};

// Typography
export const TYPOGRAPHY = {
  // Font Families
  FONT_SANS: ['Inter', 'system-ui', 'sans-serif'].join(', '),
  FONT_SERIF: ['Playfair Display', 'serif'].join(', '),
  
  // Font Sizes
  FONT_SIZE_XS: '0.75rem',    // 12px
  FONT_SIZE_SM: '0.875rem',   // 14px
  FONT_SIZE_BASE: '1rem',     // 16px
  FONT_SIZE_LG: '1.125rem',   // 18px
  FONT_SIZE_XL: '1.25rem',    // 20px
  FONT_SIZE_2XL: '1.5rem',    // 24px
  FONT_SIZE_3XL: '1.875rem',  // 30px
  FONT_SIZE_4XL: '2.25rem',   // 36px
  FONT_SIZE_5XL: '3rem',      // 48px
  FONT_SIZE_6XL: '3.75rem',   // 60px
  
  // Font Weights
  FONT_WEIGHT_LIGHT: 300,
  FONT_WEIGHT_NORMAL: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700,
  
  // Line Heights
  LINE_HEIGHT_TIGHT: 1.25,
  LINE_HEIGHT_NORMAL: 1.5,
  LINE_HEIGHT_LOOSE: 1.75,
};

// Spacing
export const SPACING = {
  SPACE_1: '0.25rem',   // 4px
  SPACE_2: '0.5rem',    // 8px
  SPACE_3: '0.75rem',   // 12px
  SPACE_4: '1rem',      // 16px
  SPACE_5: '1.25rem',   // 20px
  SPACE_6: '1.5rem',    // 24px
  SPACE_8: '2rem',      // 32px
  SPACE_10: '2.5rem',   // 40px
  SPACE_12: '3rem',     // 48px
  SPACE_16: '4rem',     // 64px
  SPACE_20: '5rem',     // 80px
  SPACE_24: '6rem',     // 96px
  SPACE_32: '8rem',     // 128px
};

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  XXL: '1536px',
};

// Animation
export const ANIMATIONS = {
  DURATION_FAST: '150ms',
  DURATION_NORMAL: '300ms',
  DURATION_SLOW: '500ms',
  
  EASING_LINEAR: 'linear',
  EASING_EASE: 'ease',
  EASING_EASE_IN: 'ease-in',
  EASING_EASE_OUT: 'ease-out',
  EASING_EASE_IN_OUT: 'ease-in-out',
  
  // Custom cubic bezier curves
  EASING_BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  EASING_SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  EASING_SNAPPY: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

// Z-Index
export const Z_INDEX = {
  BACKGROUND: 0,
  BASE: 10,
  FLOATING: 100,
  MODAL: 1000,
  OVERLAY: 999,
  NAVBAR: 50,
  DROPDOWN: 200,
  TOOLTIP: 300,
};

// Shadows
export const SHADOWS = {
  SOFT: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  NORMAL: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  MD: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  LG: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  XL: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  INNER: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

// Border Radius
export const BORDER_RADIUS = {
  NONE: '0',
  SM: '0.125rem',   // 2px
  BASE: '0.25rem',  // 4px
  MD: '0.375rem',   // 6px
  LG: '0.5rem',     // 8px
  XL: '0.75rem',    // 12px
  XXL: '1rem',      // 16px
  FULL: '9999px',
};

// 3D Animation Constants
export const THREE_JS = {
  // Camera settings
  CAMERA_FOV: 45,
  CAMERA_NEAR: 0.1,
  CAMERA_FAR: 1000,
  CAMERA_POSITION: [0, 0, 5],
  
  // Lighting
  AMBIENT_INTENSITY: 0.6,
  DIRECTIONAL_INTENSITY: 0.8,
  POINT_INTENSITY: 1.0,
  
  // Animation
  ROTATION_SPEED: 0.5,
  FLOAT_AMPLITUDE: 1.5,
  FLOAT_SPEED: 2.0,
  WAVE_FREQUENCY: 2.0,
  WAVE_AMPLITUDE: 0.5,
  
  // Materials
  METALNESS: 0.8,
  ROUGHNESS: 0.2,
  REFLECTIVITY: 0.9,
};