import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';

export default class App extends React.Component {
  state = {
     name: 'bob'
  }

  constructor(){
     super();

     this.socket = io('localhost:3000',{jsonp: false});

     console.log('socket = ',this.socket);

     this.socket.on('update', () => this.setState({name: 'Nate'}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
