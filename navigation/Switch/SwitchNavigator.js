import { createDrawerNavigator,createStackNavigator,createAppContainer ,createSwitchNavigator} from 'react-navigation';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const stack = createSwitchNavigator({
    Page1Screen:{screen:Page1,navigatorOptions:{title:'Page1'}},
    Page2Screen:{screen:Page2,navigatorOptions:{title:'Page2'}},
    Page3Screen:{screen:Page3,navigatorOptions:{title:'Page3'}}
});

export default createAppContainer(stack)
