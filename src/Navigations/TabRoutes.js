import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import * as Screens from '../Screens';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import navigationStrings from '../Navigations/navigationStrings';

const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colors.theme,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.redColor : colors.white,
                }}
                source={imagePath.firstActiveIcon}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.redColor : colors.white,
                }}
                source={imagePath.secondActiveIcon}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CREATE_POST}
        component={Screens.CreatePost}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.redColor : colors.white,
                }}
                source={imagePath.thirdActiveIcon}
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Screens.Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.redColor : colors.white,
                }}
                source={imagePath.fourthActiveIcon}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.redColor : colors.white,
                }}
                source={imagePath.fifthActiveIcon}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    //height: moderateScale(60)
    backgroundColor: 'red',
  },
});

export default TabRoutes;
