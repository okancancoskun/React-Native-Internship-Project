import {StyleSheet,Dimensions} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 24,
      fontFamily:'nunito',
    },
    container:{
      flex:10,
      backgroundColor:"#32323D",
      justifyContent:"center"
    },
    slide:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginBottom:"-8%"
    },
    boldText:{
      color:"white",
      fontSize:24,
      fontFamily:'NunitoSans-Bold'
    },
    text2: {
      fontFamily:'nunito',
      color: 'white',
      fontSize: 24,
    },
    text3View:{
      justifyContent:"center",
      alignItems:"center",
      fontFamily:'nunito',
    },
    text4View:{
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      fontFamily:'nunito',
    },
    btnContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:8,
    },
    skipText:{
      color:"white", 
      fontSize:20,
      fontFamily:'nunito',
    },
    arrowImage:{
      marginTop:5,
      marginLeft:5
    },
    mainImage:{
      alignItems:"center",
      marginTop:"10%",
    },
    eventImage:{
      alignItems:"center", 
      flex:2
    },
    subContainer:{
      flex:8,
      alignItems:"center",
      justifyContent:"center"
    },
    textBox:{
      marginTop:"3%"
    },
    images:{
      marginBottom:"2%"
    }
  });
  export default styles;