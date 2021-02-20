import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import VideoPage from '../screens/VideoPage'
import LoginScreen  from "../screens/LoginScreens"
import LoadingScreen from "../screens/LoadingScreens";
import RegisterScreen  from "../screens/RegisterScreen"; 
import TeamsandConditions from "../screens/TeamsandConditions";
import Splash from "../screens/Splash";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import feedback from "../screens/feedback";
import Report from "../screens/Menu";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions} from "react-native";
import Privacyandpolicy from "../screens/Privacyandpolicy";
import Helpandsupport from "../screens/Helpandsupport";
import PS1 from "../screens/PS1";
import PS2 from "../screens/PS2";
import PS3 from "../screens/PS3";
import PS4 from "../screens/PS4";
import PS5 from "../screens/PS5";
import PS6 from "../screens/PS6";
import PS7 from "../screens/PS7";
import PS8 from "../screens/PS8";
import PS9 from "../screens/PS9";
import ViewScreen from "../screens/VieweScreen";
import Editprofileicon from "../screens/Editprofileicon";


const stackNavigatorOptions ={
    headerShown:false
}

const AuthStack = createStackNavigator({
    TeamsandConditions: TeamsandConditions,
    Splash: Splash,
    login: LoginScreen,
    Register: RegisterScreen,
    EditProfile: EditProfile,
    Editprofileicon: Editprofileicon,

});


const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Cources:{screen:Cources},
    Xd:{screen:Xd},
    VideoPage:{screen:VideoPage},
    Profile: {screen: Profile},
    EditProfile: {screen: EditProfile},
    feedback: {screen: feedback},
    Menu: {screen: Report},
    Privacyandpolicy: {screen: Privacyandpolicy},
    Helpandsupport: {screen: Helpandsupport},
    PS1: {screen: PS1},
    PS2: {screen: PS2},
    PS3: {screen: PS3},
    PS4: {screen: PS4},
    PS5: {screen: PS5},
    PS6: {screen: PS6},
    PS7: {screen: PS7},
    PS8: {screen: PS8},
    PS9: {screen: PS9},
    ViewScreen: {screen: ViewScreen},
    Editprofileicon: Editprofileicon,
    



},

{
    defaultNavigationOptions:stackNavigatorOptions
}
)

export default createAppContainer( 
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppNavigator,
            Auth: AuthStack,
    
        }
        
    )
);
