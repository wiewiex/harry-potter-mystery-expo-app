import { Dispatch, SetStateAction } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Modal } from 'react-native';
import {
  Container,
  CustomImage,
  PressWrapper,
} from '../views/styledContainers';
import { useChosenMiniFigContext } from '~/context/ChosenMiniFigContext';
import useParts from '~/hooks/useParts';
import { ITheme } from '~/utils/theme';
import { Header, Text } from '../views/styledTexts';
import { IPart } from '~/utils/types';
import Part from './Part';
import PrimaryButton from './PrimaryButton';
import sendToFakeApi from '~/utils/sendToFakeApi';
import { IClientDetails } from './screens/Form';

export default function Summary({
  setShowSummary,
  clientDetails,
  navigation,
}: {
  setShowSummary: Dispatch<SetStateAction<boolean>>;
  clientDetails: IClientDetails;
  navigation: NavigationProp<ParamListBase>;
}) {
  const { chosenMiniFig } = useChosenMiniFigContext();
  const { data, isLoading, isSuccess } = useParts(chosenMiniFig?.set_num);
  const { colors } = useTheme() as ITheme;
  const parts: { part: IPart }[] = data ? data.results : [];

  return (
    <Modal>
      <Container
        flex={1}
        paddingTop="30px"
        paddingLeft="15px"
        backgroundColor={colors.primary}>
        {isLoading && (
          <ActivityIndicator size="large" color={colors.tertiary} />
        )}
        {isSuccess && (
          <Container
            flex={1}
            backgroundColor={colors.tertiary}
            borderRadius="30px"
            justifyContent="flex-start">
            <Container
              alignItems="flex-end"
              paddingLeft="20px"
              paddingTop="20px">
              <PressWrapper width="auto" onPress={() => setShowSummary(false)}>
                <CustomImage
                  source={require('~/assets/exit.png')}
                  imgWidth="20px"
                />
              </PressWrapper>
            </Container>
            <Container flex={1} paddingLeft="50px" paddingBottom="10px">
              <Container flex={1}>
                <Container flex={1}>
                  <Header>SUMMARY</Header>
                  <Container paddingTop="20px">
                    <CustomImage
                      imgWidth="40%"
                      source={{ uri: chosenMiniFig?.set_img_url }}
                    />
                  </Container>
                  <Text>{chosenMiniFig?.name}</Text>
                </Container>
                <Container
                  flex={1}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  marginTop="10px">
                  <Text>There are {parts.length} parts in this minifig:</Text>
                  <Container marginTop="10px">
                    {parts.map((el, i) => {
                      return (
                        <Part
                          img={el.part.part_img_url}
                          name={el.part.name}
                          partNum={el.part.part_num}
                          key={i}
                        />
                      );
                    })}
                  </Container>
                  <Container flex={1} justifyContent="flex-end">
                    <PrimaryButton
                      text="SUBMIT"
                      handler={() =>
                        sendToFakeApi({
                          clientDetails: clientDetails,
                          chosenMiniFig: chosenMiniFig,
                        })
                          .then(() => navigation.navigate('Home'))
                          .catch(() => navigation.navigate('Home'))
                      }
                    />
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        )}
      </Container>
    </Modal>
  );
}
