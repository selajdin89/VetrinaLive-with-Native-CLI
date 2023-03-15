import 'react-native-gesture-handler';
import theme from './src/Themes/theme';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
}
