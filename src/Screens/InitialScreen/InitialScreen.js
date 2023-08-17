import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import navigationStrings from '../../Navigations/navigationStrings';
import store from '../../redux/store';
import {saveUserData} from '../../redux/reducers/auth';

const {dispatch} = store;

const InitialScreen = ({navigation}) => {
  const onLogin = () => {
    dispatch(saveUserData({isLogin: true}));
  };
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
        InitialScreen
      </Text>
      <Button onPress={onLogin} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default InitialScreen;
