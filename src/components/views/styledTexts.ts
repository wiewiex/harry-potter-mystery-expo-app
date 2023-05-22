import styled from 'styled-components/native';
import { ITheme } from '~/utils/theme';

export const Header = styled.Text<{ color?: string }>`
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.secondary};
  font-size: 34px;
  text-align: center;
  font-family: ${(props: any) => props.theme.fonts.primary};
`;

export const Text = styled.Text<{ color?: string; textAlign?: string }>`
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.secondary};
  font-size: 13px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  font-weight: 500;
`;

export const ButtonText = styled.Text`
  color: ${(props: { theme: ITheme }) => props.theme.colors.tertiary};
  font-size: 16px;
  font-family: ${(props: any) => props.theme.fonts.secondary};
  letter-spacing: 0.6px;
`;

export const ValidationText = styled.Text`
  color: ${(props: { theme: ITheme }) => props.theme.colors.error};
  font-size: 12px;
  padding: 4px;
`;
