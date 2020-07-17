import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.EventsStyle}>
        <Text style={styles.eventText}> Events </Text>
      </View>
    );
  }
}

export default Events;


