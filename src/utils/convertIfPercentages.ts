import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const convertIfPercentages = (value: string): number => {
  const cleanNumber = Number(value.replace(/\D/g, ''));
  const valueInPx = Math.round((cleanNumber / 100) * screenWidth);
  return value.endsWith('%') ? valueInPx : cleanNumber;
};

export default convertIfPercentages;
