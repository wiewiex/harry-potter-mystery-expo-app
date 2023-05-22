import styled, { css } from 'styled-components/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import convertIfPercentages from '~/utils/convertIfPercentages';

export const Container = styled.View(
  (props: {
    backgroundColor?: string;
    width?: string;
    height?: string;
    flex?: number;
    justifyContent?: string;
    flexDirection?: string;
    alignItems?: string;
    borderRadius?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
  }) => css`
    align-items: ${props.alignItems ? props.alignItems : 'center'};
    justify-content: ${props.justifyContent ? props.justifyContent : 'center'};
    flex-direction: ${props.flexDirection ? props.flexDirection : 'column'};
    background-color: ${props.backgroundColor
      ? props.backgroundColor
      : 'transparent'};
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : 'auto'};
    border-radius: ${props.borderRadius ? props.borderRadius : 0};
    ${props.flex &&
    css`
      flex: ${props.flex};
    `};

    margin-top: ${props.marginTop ? props.marginTop : 0};
    margin-bottom: ${props.marginBottom
      ? props.marginBottom
      : props.marginTop || 0};
    margin-left: ${props.marginLeft ? props.marginLeft : 0};
    margin-right: ${props.marginRight
      ? props.marginRight
      : props.marginLeft || 0};

    padding-top: ${props.paddingTop ? props.paddingTop : 0};
    padding-bottom: ${props.paddingBottom
      ? props.paddingBottom
      : props.paddingTop || 0};
    padding-left: ${props.paddingLeft ? props.paddingLeft : 0};
    padding-right: ${props.paddingRight
      ? props.paddingRight
      : props.paddingLeft || 0};
  `,
);

export const CustomImage = styled.Image(
  ({
    imgWidth,
    imgHeight,
    imgBorderRadius,
  }: {
    imgWidth: string;
    imgHeight?: string;
    imgBorderRadius?: string;
  }) => css`
    width: ${imgWidth ? convertIfPercentages(imgWidth) + 'px' : '100px'};
    height: ${imgHeight
      ? convertIfPercentages(imgHeight) + 'px'
      : convertIfPercentages(imgWidth) + 'px' || '100px'};
    object-fit: cover;
    border-radius: ${imgBorderRadius ? imgBorderRadius : '0'};
  `,
);

export const SlideContainer = styled.View(
  (props: { isActive: boolean }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${(props: any) => props.theme.colors.tertiary};
    flex: 1;
    border: 5px solid
      ${props.isActive
        ? (props: any) => props.theme.colors.accent
        : 'transparent'};
    border-radius: 50px;
  `,
);

export const PressWrapper = styled.Pressable(
  (props: { width?: string; flex?: number }) => css`
    width: ${props.width ? props.width : '100%'};
    ${props.flex &&
    css`
      flex: ${props.flex};
    `};
  `,
);

export const TextInputContainer = styled.View(
  (props: { error: boolean }) => css`
    width: 100%;
    background-color: ${props.error ? '#F8EAEA' : '#f7f8f8'};
    border-width: 1px;
    border-style: solid;
    border-color: ${props.error ? 'red' : '#f7f8f8'};
    border-radius: 14px;
    align-items: center;
    justify-content: center;
  `,
);

export const CustomTextInput = styled.TextInput(
  (props: { error: boolean }) => css`
    width: 85%;
    margin-left: 10px;
    padding: 10px;
    background-color: ${props.error ? '#F8EAEA' : '#f8f8f8'};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: black;
  `,
);

export const TextInputIcon = styled(IconMaterial)`
  position: absolute;
  left: 10px;
  top: 55%;
  transform: translateY(-10px);
  color: #ada4a5;
`;
