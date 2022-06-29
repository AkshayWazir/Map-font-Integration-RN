import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SimpleScreen = () => {
  const styles = StyleSheet.create({
    text1: {
      margin: 5,
      fontSize: 30,
      color: '#000',
      fontFamily: 'Poppins-Medium',
    },
    text2: {
      margin: 5,
      fontSize: 30,
      color: '#000',
      fontFamily: 'Poppins-Black',
    },
    text3: {
      margin: 5,
      fontSize: 30,
      color: '#000',
      fontFamily: 'Poppins-Thin',
    },
    text4: {
      margin: 5,
      fontSize: 30,
      color: '#000',
      fontFamily: 'Roboto-Light',
    },
    text5: {
      margin: 5,
      fontSize: 30,
      color: '#000',
      fontFamily: 'Poppins-Black',
    },
  });
  return (
    <View>
      <Text style={styles.text1}>Hey Hello</Text>
      <Text style={styles.text2}>Hey Hello</Text>
      <Text style={styles.text3}>Hey Hello</Text>
      <Text style={styles.text4}>Hey Hello</Text>
      <Text style={styles.text5}>Hey Hello</Text>
    </View>
  );
};

export default SimpleScreen;
