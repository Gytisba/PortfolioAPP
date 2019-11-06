import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
 /*/ import Setting from './pages/Setting'; /*/
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const Screen1_StackNavigator = createStackNavigator({
  
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'About me',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006289',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Work experience',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006289',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Personal Skills',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006289',
      },
      headerTintColor: '#fff',
    }),
  },
});
/*
const Setting_StackNavigator = createStackNavigator({
  
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
     
    
      headerStyle: {
        
        backgroundColor: '#006289',
        

      },
      
      headerTintColor: '#fff',
    }),
  
  },
  
}); */
 
const DrawerNavigatorExample = createDrawerNavigator({
  
  Screen1: {
    //Title
    screen: Screen1_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About me',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Work experience',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Personal Skills',
    },
  },
  /*/
  Setting: { 
  
    
    screen: Setting_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Setting',
      
      
    },
  },/*/
});
 
export default createAppContainer(DrawerNavigatorExample);