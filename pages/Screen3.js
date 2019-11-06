import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [

  {
    title: 'Languages I know:',
    data: [
      'Lithuanian',
      'English',
     
    ],
  },
  {
    title: 'Computer skills:', 
    data: ['C 1-2 Years',
    'C# 1-2 Years',
    'C++ 1-2 Years',
    'CSS 2 Years',
    'Excel 5+ Years',
    'HTML 2-3 Years',
    'Java 1 Year',
    'Visual Basic 1 Year',

],
  },
  {
    title: 'Personal skills:', 
    data: ['High motivation to learn',
    'Ability to work in a team',
    'Desire to help others',
    'Responsibility',
    'Positivity',
    'Ability to handle stressful situations',
],
  },

];

function Item({ title }) {
  return (
    
    <View style={styles.item}>
      
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#006289',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
