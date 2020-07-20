import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.SettingsStyle}>
        <Text style={styles.settingText}> Settings </Text>
      </View>
    );
  }
}

export default Settings;


