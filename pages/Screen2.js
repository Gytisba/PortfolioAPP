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
    title: 'Education',
    data: [
      'Šilalės Simono Gaudėšiaus gimnazija (2012-2017)',
      'Vilniaus kolegija "Software engineering" (2017-now)',
     
    ],
  },
  {
    title: 'IT specialist (2018-09-17 - Now)', 
    data: ['Diagnosing and solving Windows user problems',
    'Maintenance / installation of network equipment (Printers, Routers, etc.)  ',
    'Windows server maintenance Workplace preparation',
    'Office suite installation, account administration Management',
    'Care of workplaces of desktops and laptops'
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
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
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
