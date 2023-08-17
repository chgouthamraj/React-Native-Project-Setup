import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Barlow-Medium',
        }}>
        {strings.HOME}
      </Text>
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

export default Home;
