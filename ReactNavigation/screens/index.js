import React from "react";
import Screen from "./Screen";

export const HomeScreen = ({ navigation }) => <Screen navigation={navigation} name="Home" />;
export const OrderScreen = ({ navigation }) => <Screen navigation={navigation} name="Order" />;
export const MyDriverScreen = ({ navigation }) => <Screen navigation={navigation} name="MyDriver" />;
export const HelpCenterScreen = ({ navigation }) => <Screen navigation={navigation} name="HelpCenter" />;
export const ReportScreen = ({ navigation }) => <Screen navigation={navigation} name="Report" />;
export const SettingScreen = ({ navigation }) => <Screen navigation={navigation} name="Setting" />;