import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditProfile from '../EditProfile/EditProfile';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import styles from "./styles"
import 'react-native-gesture-handler';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phoneno: '',
      email: '',
    };
  }

  _onChangeText = text => {
    this.setState({
      username: text,
    });
  };

  _EditProfile() {
    this.props.navigation.navigate('EditProfile');
  }

  render() {
    return (
      
        <View style={styles.ProfileStyle}>
          <View style={styles.editContainer}>
            <TouchableOpacity
              style={styles.EditBtn}
              onPress={() => this._EditProfile()}>
              <View
                style={styles.pencilView}>
                <FontAwesome5
                  name={'pen'}
                  style={styles.fontawesomeIcons}
                />
              </View>
              <Text style={styles.editText}>
                Edit profile
            </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ImageStyle}>
            <View
              style={styles.cameraIconContainer}>
              <TouchableOpacity>
                <View
                  style={styles.cameraIcon}>
                  <FontAwesome5
                    name={'camera'}
                    style={styles.fontawesomeIcons}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={styles.nameText}>
            John Dorian
        </Text>
          <Text
            style={styles.phoneText}>
            Number phone
        </Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.row} editable={false}/>
          </View>

          <Text
            style={styles.emailText}>
            Enter your email
        </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="example@gmail.com"
              style={styles.row}
              editable={false}
            />
          </View>

          <View style={styles.logoutContainer}>
            <TouchableOpacity style={styles.EditBtn} onPress={()=>auth().signOut()}>
              <Image source={require('../../assets/images/icons/logout.png')} style={styles.logoutImage}></Image>
              <Text style={styles.editText}>
                Logout
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      

    );
  }
}

export default Profile;


