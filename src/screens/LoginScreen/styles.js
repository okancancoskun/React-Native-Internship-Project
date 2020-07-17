
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = {
    container: {
      flex: 1,
      backgroundColor: '#32323D',
      alignItems:'center'
    },
    root: {padding: 20, minHeight: 300},
    title: {textAlign: 'center', fontSize: 30},
    logo:{
        width:90.7,
        height:104.29,
        marginVertical:windowHeight/20,
        padding: 50,
    },
    logoPart:{
        flex:1,
        
    },
    loginpartContainer:{
        justifyContent:'center'
    },
    signInPart:{
        flex:2,
        width:windowWidth/1.1,
        alignItems:'center'
    },
    //hereeee
    loginpartContainer:{
        justifyContent:'center'
    },
    numberInputInfo:{
        fontFamily:'nunito',
        fontSize: 12,
        
        color:'rgba(255, 255, 255, 0.7)',
        paddingBottom: '1%'
    },
    textInputContainer:{
        flexDirection: 'row',
        alignItems:'center',
        width:windowWidth/1.16,
    },
    textInput:{
        backgroundColor:'#28282F',
        width:windowWidth/1.16,
        fontFamily: 'sarabun',
        padding: 14,
        paddingLeft:16,
        borderRadius:3,
        color:'rgba(255, 255, 255, 0.7)'
    },
    cancelIcon:{
        marginLeft:'-8%',
        marginTop:3,
    },
    termsAndConditions:{
        flexDirection: 'row',
        marginLeft:'-1.5%'
        
    },
    checkbox:{
        marginTop:5,
    },
    termsAndConditionsText:{
        color:'#FFFFFF',
        fontFamily:'nunito',
        fontSize:15,
        padding:10,
        textDecorationLine:'underline'
    },
    continueButton:{
        borderRadius:3,
        backgroundColor:'#018786',
        marginVertical:20,
        alignItems:"center",
        padding: 12,
        paddingTop:13,
        paddingBottom:13,
        
    }, 
    continueButtonText:{
        fontSize:17,
        color:'#FFFFFF',
        padding:3,
        fontFamily:'NunitoSans-Bold'
    },
    seperatePart:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'row',
        marginVertical:5
    },
    line:{
        borderWidth:0.5 ,
        width:10,
        width:windowWidth/3,
        opacity:0.2,
        borderColor:'#FFFFFF'
        
    },  
    orText:{
        color:'#FFFFFF',
        fontSize:12,
        fontFamily:'NunitoSans-Regular',
        marginTop:'-1%'
    },
    signLogo:{
        marginHorizontal:10
    },
    confirmContainer:{
        backgroundColor:'#3D3D47',
        width:windowWidth/1.13,
        padding: 15,
        borderRadius: 10,
    },
    confirmInfoText:{
        color:'#FFFFFF',
        fontFamily:'NunitoSans-Bold',
        fontSize:20,
        textAlign:'center',
        padding:10
        
    },
    continueButtonText:{
      fontSize:17,
      color:'#FFFFFF',
      padding:3,
      fontFamily:'NunitoSans-Bold'
  },
    cellRoot: {
        width: windowWidth/9.5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color:'rgba(255, 255, 255, 0.7)',
      },
      cellText: {
        width: windowWidth/15,
        color:'rgba(255, 255, 255, 0.7)',
     
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: '#018786',
      color:'rgba(255, 255, 255, 0.7)',
      borderBottomWidth: 2,
    },
    sendConfirmAgainText:{
        color:'#FFFFFF',
        fontFamily:'NunitoSans-Regular',
        fontSize:14,
        textAlign:'center',
        padding:10,
        textDecorationLine:'underline'
    },
    confirmButton:{
        backgroundColor:'#018786',
        marginVertical:20,
        marginHorizontal:5,
        alignItems:"center",
        padding: 12,
        borderRadius:4,
        
    },
    codeFieldRoot: {
        marginTop: 20,
        color: 'rgba(255, 255, 255, 0.7)',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
   
  };

  export default styles;
