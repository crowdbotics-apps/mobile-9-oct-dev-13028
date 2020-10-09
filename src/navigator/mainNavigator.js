import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';
import BlankScreen112006Navigator from '../features/BlankScreen112006/navigator';
import BlankScreen012000Navigator from '../features/BlankScreen012000/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankBlueprint: { screen: BlankBlueprintNavigator },
BlankScreen112006: { screen: BlankScreen112006Navigator },
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
