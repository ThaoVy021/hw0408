import React from 'react';
import {StyleSheet, Text, View, Platform, ScrollView} from 'react-native';

const App = () => (
  <ScrollView style={styles.container}>
    <View style={[styles.item, styles.purple]}>
      <Text style={styles.title}>Purple: #C9C9FF</Text>
    </View>
    <View style={[styles.item, styles.blue]}>
      <Text style={styles.title}>Blue: #3D85C6</Text>
    </View>
    <View style={[styles.item, styles.green]}>
      <Text style={styles.title}>Green: #96CC96</Text>
    </View>
    <View style={[styles.item, styles.yellow]}>
      <Text style={styles.title}>Yellow: #F4B940</Text>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: Platform.select({
      ios: 50,
      android: 0,
    }),
  },
  item: {
    width: '100%',
    height: 170,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    overflow: 'hidden',
  },
  purple: {
    backgroundColor: '#C9C9FF',
  },
  blue: {
    backgroundColor: '#3D85C6',
  },
  green: {
    backgroundColor: '#96CC96',
  },
  yellow: {
    backgroundColor: '#F4B940',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default App;
