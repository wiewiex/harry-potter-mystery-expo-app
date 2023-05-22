import { Container, CustomImage } from '../views/styledContainers';
import { Text } from '../views/styledTexts';

export default function Part({
  img,
  name,
  partNum,
}: {
  img: string;
  name: string;
  partNum: string;
}) {
  return (
    <Container
      flexDirection="row"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      marginBottom="5px">
      <CustomImage imgWidth="40px" source={{ uri: img }} />
      <Container alignItems="flex-start" paddingLeft="10px">
        <Text textAlign="left" numberOfLines={1}>
          {name}
        </Text>
        <Text color="orange">{partNum}</Text>
      </Container>
    </Container>
  );
}
