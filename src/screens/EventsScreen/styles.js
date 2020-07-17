import {StyleSheet,Dimensions} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    EventsStyle: {
      flex: 1,
      backgroundColor: '#32323D',
    },
    eventText:{
      textAlign: 'center', 
      fontSize: 40
    }
  });
  export default styles;