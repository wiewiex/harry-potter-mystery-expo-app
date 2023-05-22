import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Container, CustomImage } from '~/components/views/styledContainers';
import PrimaryButton from '../PrimaryButton';

export default function Home({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <Container flex={1} paddingTop="50px" paddingLeft="50px">
      <Container flex={1}>
        <CustomImage source={require('~/assets/logo.png')} imgWidth="60%" />
      </Container>
      <PrimaryButton
        text="GET STARTED"
        handler={() => {
          navigation.navigate('Slider');
        }}
      />
    </Container>
  );
}
