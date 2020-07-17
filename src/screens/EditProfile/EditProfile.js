import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles"

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      // phoneno: '',
      // email: '',
    };
  }

  goProfile() {
    this.props.navigation.navigate('Profile');
  }

  _onChangeText = text => {
    this.setState({
      username: text,
    });
  };
  _onChangeNo = no => {
    this.setState({
      phoneno: no,
    });
  };
  _onChangeMail = mail => {
    this.setState({
      email: mail,
    });
  };

  render() {
    return (
      <View style={styles.EditProfileStyle}>
        <View style={styles.Edit}>
          <TouchableOpacity onPress={() => this.goProfile()}>
            <Image source={require('../../assets/images/icons/backarrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/icons/confirm.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.ImageStyle}>
          <View
            style={styles.cameraIconContainer}>
            <TouchableOpacity>
              <View
                style={styles.cameraIconView}>
                <FontAwesome5
                  name={'camera'}
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.userNameContainer}>
          <TextInput
            onChangeText={this._onChangeText}
            style={styles.userNameInput}>
            username
            
          </TextInput>
          <Image source={require('../../assets/images/icons/editpencil.png')} style={styles.userpencil} />
        </View>

        <Text
          style={styles.phoneText}>
          Number phone
        </Text>

        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <TextInput onChangeText={this._onChangeNo} style={styles.row} />
          <Image
            style={styles.pen}
            source={require('../../assets/images/icons/editpencil.png')}
          />
        </View>

        <Text
          style={styles.emailText}>
          Email
        </Text>

        <View
          _onChangeMail={this._onChangeMail}
          style={styles.onChangeMailStyle}>
          <TextInput style={styles.row} />
          <Image
            style={styles.pen}
            source={require('../../assets/images/icons/editpencil.png')}
          />
        </View>
      </View>
    );
  }
}

export default EditProfile;

