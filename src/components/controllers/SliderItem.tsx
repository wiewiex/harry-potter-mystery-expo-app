import {
  CustomImage,
  Container,
  SlideContainer,
} from '~/components/views/styledContainers';
import { Text } from '~/components/views/styledTexts';
import { PressWrapper } from '~/components/views/styledContainers';
import { ISliderItem } from '~/utils/types';

const SliderItem = ({
  item,
  index,
  setChosenMiniFig,
  chosenMiniFig,
  setModal,
}: ISliderItem) => {
  return (
    <SlideContainer
      isActive={chosenMiniFig ? item.set_num === chosenMiniFig.set_num : false}>
      <PressWrapper flex={1} onPress={() => setChosenMiniFig(item)}>
        <Container flex={1}>
          <CustomImage
            imgWidth="60%"
            imgBorderRadius="50px"
            source={{ uri: item.set_img_url }}
          />
          <Container paddingTop="20px" paddingLeft="30px">
            <Text color="black">{item.name}</Text>
          </Container>
          <PressWrapper
            onPress={() => setModal({ show: true, url: item.set_url })}
            width="auto">
            <Text color="#0078d7">SHOW DETAILS</Text>
          </PressWrapper>
        </Container>
      </PressWrapper>
    </SlideContainer>
  );
};

export default SliderItem;
