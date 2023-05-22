import {
  TextInputContainer,
  CustomTextInput,
  TextInputIcon,
} from '~/components/views/styledContainers';
import { ValidationText } from '../views/styledTexts';
import { Container } from '../views/styledContainers';

interface IPrimaryTextInput {
  label: string;
  onChangeText: (value: string) => void;
  value: string;
  Imagine?: string;
  error?: undefined | string | boolean;
  onBlur?: (e: any) => void;
}

const PrimaryTextInput = ({
  label,
  onChangeText,
  value,
  Imagine,
  error,
  onBlur,
}: IPrimaryTextInput) => {
  return (
    <Container width="100%">
      <TextInputContainer error={!!error}>
        {Imagine && <TextInputIcon name={Imagine} size={15} />}
        <CustomTextInput
          error={!!error}
          placeholder={label}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor="#ADA4A5"
          onBlur={onBlur}
        />
      </TextInputContainer>
      <Container width="100%" paddingRight="20px" alignItems="flex-end">
        <ValidationText>{error || ''}</ValidationText>
      </Container>
    </Container>
  );
};

export default PrimaryTextInput;
