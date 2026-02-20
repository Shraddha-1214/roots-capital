/**
 * Wealth Advisory Component Types
 */

// Button Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

// Navigation Item
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// Navigation Props
export interface NavbarProps {
  navItems?: NavItem[];
  logoText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

// Hero Section Props
export interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  className?: string;
}

// 3D Block Props
export interface BlockProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  isHorizontal?: boolean;
  animationDelay?: number;
  floating?: boolean;
}

// Theme Colors Interface
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
}

// Animation Configuration
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  repeat?: boolean;
  yoyo?: boolean;
}

// Viewport Dimensions
export interface Viewport {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// Financial Goals Interface
export interface FinancialGoal {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

// Testimonial Interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

// Service Interface
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

// Form Field Error
export interface FormFieldError {
  field: string;
  message: string;
}

// API Response Interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: FormFieldError[];
}

// Theme Context
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: ThemeColors;
}

// App Context
export interface AppContextType {
  viewport: Viewport;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}