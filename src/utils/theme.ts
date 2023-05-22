import { DarkTheme } from '@react-navigation/native';

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
    accent: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: '#011627',
    secondary: '#222024',
    tertiary: '#fefefc',
    error: '#B22222',
    accent: '#2babff',
  },
  fonts: {
    primary: 'Oswald_700Bold',
    secondary: 'Oswald_500Medium',
  },
};

export const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: theme.colors.primary,
  },
};
