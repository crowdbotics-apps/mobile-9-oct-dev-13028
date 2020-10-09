import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012018Navigator from '../features/BlankScreen012018/navigator';
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';
import BlankScreen012000Navigator from '../features/BlankScreen012000/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012018: { screen: BlankScreen012018Navigator },
BlankBlueprint: { screen: BlankBlueprintNavigator },
BlankScreen012000: { screen: BlankScreen012000Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
