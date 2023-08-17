import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePost</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default CreatePost;
