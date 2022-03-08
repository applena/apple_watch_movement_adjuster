import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is some sort of customizable page - maybe. Eventually.</Text>
      <Text>

        TODO:
        * connect to apple watch movement rings
        * figure out how to send an sms/email with a summary of the movement over the past month (apple aready has the info - so maybe I can just get it from them) - see if you are hitting your target 80% or more.
        * ask if you want to asjust your goal based on if you are hitting your target
        * adjust the movement rings target
        NBD
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
