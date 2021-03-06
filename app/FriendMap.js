import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FriendMap extends Component {
  constructor(props) {
    super(props);
    this.state =  {};
  }

  static navigationOptions = {
    title: ({state}) => (state.params.friendName)
  };

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View>
        <Text>Raffy is in a ditch a block away from his house. Find his fingers.</Text>
        <Text>{ params.friendName }</Text>
      </View>
    );
  }
}