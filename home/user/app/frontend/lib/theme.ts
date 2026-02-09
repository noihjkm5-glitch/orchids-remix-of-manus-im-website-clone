import { DefaultTheme, DarkTheme, type Theme } from '@react-navigation/native';

export const IMPERIAL = {
  background: '#05221a',
  backgroundEnd: '#0a2e24',
  card: 'rgba(5, 66, 57, 0.85)',
  cardSolid: '#054239',
  primary: '#d4af37',
  primaryForeground: '#05221a',
  text: '#edebe0',
  textSecondary: '#b9a779',
  textTertiary: 'rgba(237, 235, 224, 0.5)',
  border: 'rgba(212, 175, 55, 0.2)',
  borderFocus: 'rgba(212, 175, 55, 0.5)',
  accent: 'rgba(212, 175, 55, 0.1)',
  glass: 'rgba(5, 66, 57, 0.85)',
  chatShadow: 'rgba(212, 175, 55, 0.08)',
  white: '#edebe0',
  black: '#05221a',
  gold: '#d4af37',
  goldLight: '#e8d48b',
  goldDark: '#988561',
  goldGlow: 'rgba(212, 175, 55, 0.4)',
  forest: '#428177',
  forestDark: '#054239',
  forestDeep: '#002623',
  syGreen: '#007A3D',
  syRed: '#CE1126',
  umber: '#6b1f2a',
  success: '#4ade80',
  warning: '#fbbf24',
  error: '#ef4444',
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
