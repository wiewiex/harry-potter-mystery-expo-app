import { Modal } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { IModal } from '~/context/AppContext';
import {
  Container,
  PressWrapper,
  CustomImage,
} from '../views/styledContainers';

const screenWidth = Dimensions.get('window').width;

export default function WebViewModal({
  url,
  handler,
}: {
  url: string | undefined;
  handler: Dispatch<SetStateAction<IModal>>;
}) {
  return (
    <Modal>
      <Container flex={1}>
        <Container alignItems="flex-end" paddingLeft="20px" paddingTop="20px">
          <PressWrapper
            width="auto"
            onPress={() => handler({ show: false, url: undefined })}>
            <CustomImage
              source={require('~/assets/exit.png')}
              imgWidth="20px"
            />
          </PressWrapper>
        </Container>
        <Container flex={1}>
          {url && (
            <WebView
              style={{ flex: 1, width: screenWidth }}
              source={{ uri: url }}
            />
          )}
        </Container>
      </Container>
    </Modal>
  );
}
