import React from 'react';
import { createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  HomeScreen,
  OrderScreen,
  MyDriverScreen,
  HelpCenterScreen,
  ReportScreen,
  SettingScreen
} from "./screens";

import SideBar from "./components/SideBar";

const DrawerNavigator = createDrawerNavigator(
{
  ProfileScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  MessageScreen: {
    screen: OrderScreen,
    navigationOptions: {
      title: "Orders",
      drawerIcon: ({ tintColor }) => <Feather name="shopping-cart" size={16} color={tintColor} />
    }
  },
  ActivityScreen: {
    screen: MyDriverScreen,
    navigationOptions: {
      title: "My Drivers",
      drawerIcon: ({ tintColor }) => <Feather name="shopping-cart" size={16} color={tintColor} />
    }
  },
  ListScreen: {
    screen: HelpCenterScreen,
    navigationOptions: {
      title: "Help Center",
      drawerIcon: ({ tintColor }) => <Feather name="phone-call" size={16} color={tintColor} />
    }
  },
  ReportScreen: {
    screen: ReportScreen,
    navigationOptions: {
      title: "Reports",
      drawerIcon: ({ tintColor }) => <Feather name="alert-triangle" size={16} color={tintColor} />
    }
  },
  SignOutScreen: {
    screen: SettingScreen,
    navigationOptions: {
      title: "Settings",
      drawerIcon: ({ tintColor }) => <Feather name="settings" size={16} color={tintColor} />
    }
  },
},
{
  contentComponent: props => <SideBar {...props} />,

  drawerWidth: Dimensions.get("window").width * 0.75,
  hideStatusBar: true,

  contentOptions: {
    activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
    activeTintColor: "#53115B",
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  }
}
);


export default createAppContainer(DrawerNavigator);