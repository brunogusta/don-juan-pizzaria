import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import SelectSize from './pages/SelectSize';
import SelectType from './pages/SelectType';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import OrderHistory from './pages/OrderHistory';
import CheckOrder from './pages/CheckOrder';

const AppStack = createStackNavigator(
  {
    Menu,
    SelectSize,
    SelectType,
    Cart,
    OrderHistory,
    CheckOrder,
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    headerMode: 'none',
  },
);

const Type = createStackNavigator(
  {
    SelectType,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      Type,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default Routes;
