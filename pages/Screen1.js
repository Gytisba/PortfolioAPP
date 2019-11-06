import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  View,
  Image,
} from 'react-native';
 
export default class Screen1 extends Component {
  constructor(props){
    super(props)
    this.state = { name: ''}
    this.persistData = this.persistData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  persistData(){
    let name = this.state.name
  
    AsyncStorage.setItem('name', name).done();

    this.setState({name: name, persistedName: name})
  }

  check(){

    AsyncStorage.getItem('name').then((name) => {
        this.setState({name: name, persistedName: name})
    })


  }

  clearData(){
    AsyncStorage.clear();
    this.setState({name: ''})
    
  }

  componentWillMount(){
    this.check();
  }
 
  render() {
   
    return (
      <View style={styles.MainContainer}>
     
    
        <Image style ={styles.Image}
            source={require('../image/profile.png')}
          />
          <Text style={styles.Text}> {this.state.persistedName}
          </Text>

       
        
      <Text>Change Name:</Text>
      <TextInput
       value={this.state.name}
       onChangeText={(text) => this.setState({name: text})}
       style={styles.input} />

   
        <TouchableHighlight
          style={styles.button}
          onPress={this.persistData}
          underlayColor="white">
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.clearData}
          underlayColor="white">
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableHighlight>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginTop: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black'
  },
  Image: {
    width: 250,
    height: 250, 
    marginLeft: 5, 
    marginBottom: 20, 
    borderRadius:180,
  },
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
  },
  Text: {
    fontSize: 32, 
    fontWeight: 'bold' ,
    marginBottom: 20,
  },
});

AppRegistry.registerComponent('persistingData', () => persistingData);