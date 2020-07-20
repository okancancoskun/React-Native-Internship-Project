import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.CameraStyle}>
        <Text style={styles.cameraText}> Camera </Text>
      </View>
    );
  }
}

export default Camera;


