import {StyleSheet,Dimensions} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  export default styles;