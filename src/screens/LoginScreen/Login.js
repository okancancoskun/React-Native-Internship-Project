import React, { Component, useState, useEffect } from 'react'
import {  View,Text,TextInput, CheckBox,TouchableOpacity, Image, Alert, Linking  } from 'react-native'
import styles from './styles';
import { GoogleSignin } from '@react-native-community/google-signin';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';

  GoogleSignin.configure({
    //androidClientId: '862740039484-coa85579s63k7i7gltln15n45ctlle9f.apps.googleusercontent.com',
    webClientId: '194722607126-oinruqqu8mraa7kl5f6qpq3fr47v79kq.apps.googleusercontent.com',
    offlineAccess: false
  });

//https://drive.google.com/file/d/1BcmUmQJySEgNTO2xG2b1PAyQeeeaeFXc/view?usp=sharing

function SignOption(){
  const [confirm, setConfirm] = useState(null);
    const [input, setInput] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [pressCancel,setPressCancel] = useState(false);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
    });

    const CELL_COUNT = 6;
  
    /**OTP PART FUNCTIONS**/
//** FOR RESEND CODE WE CALL THIS FUNCTION AGAIN **/
    async function sendConfirmAgain(phoneNumber){
      console.log('SendConfirmAgain= '+phoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
    /*  CONTROL IS CONFIRM CODE TRUE OR NOT */
    async function confirmCode(value) {
      if(value=='' || value==null){
        console.log('Invalid code.');
        Alert.alert('Invalid code!')
      }else{
        try {
          console.log('Kod: '+value);
          await confirm.confirm(value);
          
        } catch (error) {
          console.log('Invalid code.');
          Alert.alert('Invalid code!');
        }
      }
     
    }
 /**AUTH  PART FUNCTIONS**/
    //*********** SIGNIN WITH PHONE*********************
    async function signInWithPhoneNumber(phoneNumber){
      if(!isSelected){
        Alert.alert('Please read and confirm Terms & Conditions');
      }else{
        if(phoneNumber=='' || phoneNumber==null){
          console.log('signInWithPhoneNumber If Girdi.. '+phoneNumber);
          Alert.alert('Please fill all areas.')
        }else{
          console.log('signInWithPhoneNumber Else Girdi.. '+phoneNumber);
          
          const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
          
          setConfirm(confirmation);
        }
      }
    }
  
  
    //*********** SIGNIN WITH Facebook*********************
    async function onFacebookButtonPress() {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    }
    
    //*********** SIGNIN WITH GOOGLE*********************
    async function onGoogleButtonPress() {
      if(!isSelected){
        Alert.alert('Please read and confirm Terms & Conditions');
      }else{
        // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
      }
      
    }
    function onPressCancel(){
      setInput('')
    }
    function openTermsConditions(){
      database()
      .ref('tcLink')
      .once('value')
      .then(snapshot => {
        console.log('link: ', snapshot.val());
        Linking.openURL(snapshot.val());
      });
    }
   
    
    if (!confirm) {
      return(
       
          <View style={styles.loginpartContainer}>
          {pressCancel?<Text style={styles.numberInputInfo}>Phone number or email</Text>:<View></View>}
          <View style={styles.textInputContainer}>
          <TextInput value={input} onFocus={()=>setPressCancel(true)}  onBlur={()=>setPressCancel(false)} onChangeText={(text) => setInput(text)}  placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Input phone number or email' style={styles.textInput}></TextInput>
            {pressCancel?<TouchableOpacity onPress={()=>onPressCancel()} style={styles.cancelIcon}><Image    source={require ('../../assets/images/icons/cancelIcon.png')}/></TouchableOpacity>:null}
          </View>
           
           <View style={styles.termsAndConditions}>
      
            <CheckBox tintColors={{ false: 'rgba(255, 255, 255, 0.5)' }} value={isSelected} onValueChange={setSelection}  style={styles.checkbox}/>
            <TouchableOpacity onPress={()=>openTermsConditions()}><Text style={styles.termsAndConditionsText}>Terms & Conditions</Text></TouchableOpacity>
           </View>
           
          <TouchableOpacity onPress={()=>signInWithPhoneNumber(input)}  style={styles.continueButton}><Text style={styles.continueButtonText}>CONTINUE</Text></TouchableOpacity>
          <View style={styles.seperatePart}>
              <View style={styles.line}></View>
              <Text style={styles.orText}> or </Text>
              <View style={styles.line}></View>
          </View>
          <View style={styles.seperatePart}>
              <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}><Image  style={styles.signLogo}  source={require ('../../assets/images/logos/signwithfacebooklogo.png')}/></TouchableOpacity> 
              <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}><Image style={styles.signLogo} source={require ('../../assets/images/logos/signwithgooglelogo.png')}/></TouchableOpacity> 
          </View>
          </View>  
      );
        
    }else{
      return(
        
          <View style={styles.confirmContainer}>
          <Text style={styles.confirmInfoText}>We have sent a code to your {'\n'}number</Text>
          <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
              <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
              </View>
              )}
          />
          <TouchableOpacity onPress={()=>sendConfirmAgain(value)}><Text style={styles.sendConfirmAgainText}>send the code again</Text></TouchableOpacity>      
                                  
          <TouchableOpacity onPress={() => confirmCode()}  style={styles.confirmButton}><Text style={styles.continueButtonText}>NEXT</Text></TouchableOpacity>
        
        </View>
        
      );
        
    }  
}

function App() {    
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
    
    if (!user) {
      return (
        <View style={styles.container}>
        <View style={styles.logoPart}>
            <Image style={styles.logo} source={require ('../../assets/images/logos/loginlogo.png')}/>
        </View>
        <View style={styles.signInPart}>
            <SignOption/> 
        </View>
    </View>
        
      );
    }
    return(
      <MenuNavigation/>
    );
     
    }
 
export default class Login extends Component {
  
    render() {
        
    return (         
      <App/>
    )
    }
}
