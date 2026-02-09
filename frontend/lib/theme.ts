import { DarkTheme, type Theme } from '@react-navigation/native';

export const IMPERIAL = {
  background: '#0a2a2a',
  backgroundEnd: '#0f3535',
  card: 'rgba(10, 50, 50, 0.85)',
  cardSolid: '#0d3333',
  primary: '#d4af37',
  primaryForeground: '#0a2a2a',
  text: '#f0ede2',
  textSecondary: '#c4a95a',
  textTertiary: 'rgba(240, 237, 226, 0.5)',
  border: 'rgba(212, 175, 55, 0.25)',
  borderFocus: 'rgba(212, 175, 55, 0.6)',
  accent: 'rgba(212, 175, 55, 0.12)',
  glass: 'rgba(10, 50, 50, 0.88)',
  chatShadow: 'rgba(212, 175, 55, 0.1)',
  white: '#f0ede2',
  black: '#0a2a2a',
  gold: '#d4af37',
  goldLight: '#e8d48b',
  goldDark: '#988561',
  goldGlow: 'rgba(212, 175, 55, 0.4)',
  teal: '#1a6b6b',
  tealDark: '#0d3333',
  tealDeep: '#0a2a2a',
  syGreen: '#007A3D',
  syRed: '#CE1126',
  syWhite: '#FFFFFF',
  syBlack: '#000000',
  forest: '#1a6b6b',
  forestDark: '#0d3333',
  forestDeep: '#0a2a2a',
  umber: '#6b1f2a',
  umberDark: '#4a151e',
  success: '#4ade80',
  warning: '#fbbf24',
  error: '#ef4444',
  gradientStart: '#0a2a2a',
  gradientMid: '#0d3333',
  gradientEnd: '#1a6b6b',
};

export const MANUS = IMPERIAL;

const imperialNavTheme: Theme = {
  ...DarkTheme,
  colors: {
    background: IMPERIAL.background,
    border: IMPERIAL.border,
    card: IMPERIAL.cardSolid,
    notification: IMPERIAL.primary,
    primary: IMPERIAL.primary,
    text: IMPERIAL.text,
  },
};

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: imperialNavTheme,
  dark: imperialNavTheme,
};
