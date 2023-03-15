import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import ResetPassword from '../Screens/ResetPassword';
import Products from '../Screens/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useState} from 'react';
import Payment from '../Screens/Payment';
import Orders from '../Screens/Orders';
import OrderInfo from '../Screens/OrderInfo';
import Subscription from '../Screens/Subcription';
import {RootDrawerParamList, RootStackParamList} from '../Types/Types';
import Dashboard from '../Screens/Dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isAuth && (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn">
              {props => (
                <SignIn {...props} setIsAuth={setIsAuth} isAuth={isAuth} />
              )}
            </Stack.Screen>
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </Stack.Navigator>
        )}
        {!isAuth && (
          <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Products" component={Products} />
            <Drawer.Screen name="Payment" component={Payment} />
            <Drawer.Screen name="Orders" component={Orders} />
            <Drawer.Screen name="Subscription" component={Subscription} />
            <Drawer.Screen
              name="OrderInfo"
              component={OrderInfo}
              options={{
                headerShown: false,
                drawerLabel: () => null,
                drawerIcon: () => null,
              }}
            />
          </Drawer.Navigator>
        )}
      </View>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
