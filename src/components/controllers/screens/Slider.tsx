import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Header } from '~/components/views/styledTexts';
import { Container } from '~/components/views/styledContainers';
import useMiniFigs from '~/hooks/useMiniFigs';
import SliderItem from '../SliderItem';
import { useTheme } from 'styled-components';
import { ITheme } from '~/utils/theme';
import PrimaryButton from '../PrimaryButton';
import { useChosenMiniFigContext } from '~/context/ChosenMiniFigContext';
import shuffleArray from '~/utils/shuffleArray';
import WebViewModal from '../WebViewModal';
import { IModal, IMiniFig } from '~/utils/types';

export default function Slider({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const sliderWidth = Dimensions.get('window').width;
  const { colors } = useTheme() as ITheme;
  const { data, isLoading, isSuccess } = useMiniFigs();

  const { chosenMiniFig, setChosenMiniFig } = useChosenMiniFigContext();
  const [modal, setModal] = useState<IModal>({ show: false, url: undefined });

  const allResults: IMiniFig[] = data ? data.results : [];
  const itemsWithImage: IMiniFig[] = allResults.filter(el => el.set_img_url);

  const threeRandom = useMemo(
    () => shuffleArray(itemsWithImage).slice(0, 3),
    [data],
  );

  const renderItem = ({ item, index }: { item: IMiniFig; index: number }) => (
    <SliderItem
      item={item}
      index={index}
      chosenMiniFig={chosenMiniFig}
      setChosenMiniFig={setChosenMiniFig}
      setModal={setModal}
    />
  );

  return (
    <Container flex={1}>
      {isLoading && <ActivityIndicator size="large" color={colors.tertiary} />}
      {isSuccess && (
        <>
          <Container flex={1}>
            <Container marginTop="50px">
              <Header color={colors.tertiary}>CHOOSE YOUR MINIFIG</Header>
            </Container>
            <Container flex={15}>
              <Carousel
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth - 70}
                data={threeRandom}
                renderItem={renderItem}
                layout="default"
                vertical={false}
                firstItem={1}
              />
            </Container>
            <Container
              flex={5}
              justifyContent="flex-end"
              paddingBottom="100px"
              width="100%">
              <PrimaryButton
                text="CHOSE FIGURE"
                disabled={!chosenMiniFig}
                handler={() => navigation.navigate('Form')}
              />
            </Container>
          </Container>
          {modal.show && <WebViewModal url={modal.url} handler={setModal} />}
        </>
      )}
    </Container>
  );
}
