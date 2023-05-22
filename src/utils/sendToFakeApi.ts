import axios from 'axios';
import { IClientDetails } from '~/components/controllers/Form';
import { IMiniFig } from './types';
import Toast from 'react-native-toast-message';

const sendToFakeApi = async ({
  clientDetails,
  chosenMiniFig,
}: {
  clientDetails: IClientDetails | undefined;
  chosenMiniFig: IMiniFig | undefined;
}) => {
  if (clientDetails && chosenMiniFig) {
    try {
      await axios.post('http://localhost:3000', {
        clientDetails,
        chosenMiniFig,
      });
      Toast.show({
        type: 'success',
        text1: 'Success !',
        text2: 'Data has been successfully sent',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Ups !',
        text2: 'There are no endpoints configured',
      });
    }
  }
};

export default sendToFakeApi;
