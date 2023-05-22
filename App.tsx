import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components';
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  useFonts,
  Oswald_700Bold,
  Oswald_500Medium,
} from '@expo-google-fonts/oswald';
import { theme, navTheme } from '~/utils/theme';
import { ChosenMiniFigContextProvider } from '~/context/ChosenMiniFigContext';

import Home from '~/components/controllers/screens/Home';
import Slider from '~/components/controllers/screens/Slider';
import Form from '~/components/controllers/screens/Form';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_700Bold,
    Oswald_500Medium,
  });
  if (!fontsLoaded) return null;

  return (
    <ChosenMiniFigContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <NavigationContainer theme={navTheme}>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="Form" component={Form} />
              </Stack.Navigator>
            </NavigationContainer>
            <Toast />
          </SafeAreaView>
        </ThemeProvider>
      </QueryClientProvider>
    </ChosenMiniFigContextProvider>
  );
}
