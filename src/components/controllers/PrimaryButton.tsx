import { memo } from 'react';
import { Container } from '../views/styledContainers';
import { ButtonText } from '../views/styledTexts';
import { TouchableHighlight } from 'react-native';
import { useTheme } from 'styled-components';
import { ITheme } from '~/utils/theme';

interface IPrimaryButton {
  disabled?: boolean;
  handler: () => void;
  text: string;
}

const PrimaryButton = ({ disabled, handler, text }: IPrimaryButton) => {
  const { colors } = useTheme() as ITheme;
  return (
    <TouchableHighlight onPress={handler} disabled={disabled}>
      <Container
        backgroundColor={disabled ? '#cec9c9' : colors.accent}
        width="150px"
        height="50px"
        borderRadius="10px">
        <ButtonText>{text}</ButtonText>
      </Container>
    </TouchableHighlight>
  );
};

export default memo(PrimaryButton);
