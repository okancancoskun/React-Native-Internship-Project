import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    ProfileStyle: {
        flex: 1,
        backgroundColor: '#32323D',
    },
    EditBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ImageStyle: {
        marginTop: '5%',
        width: windowWidth / 2.9,
        height: windowHeight / 5,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 8,
    },
    fontawesomeIcons:{
        fontSize: 16, 
        color: 'white'
    },
    row: {
        fontSize: 20,
        color: 'white',
        width: '100%',
        fontFamily:'nunito',
        paddingLeft: '6%',
        borderBottomColor: '#7F7F8B',
        borderBottomWidth: 1,
    },
    logoutImage: {
        width: 18,
        height: 18
    },
    pencilView: {
        backgroundColor: '#4C4C56',
        width: 36,
        height: 36,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    editContainer: {
        marginLeft: '7%',
        marginTop: '7%'
    },
    editText: {
        marginLeft: '2%',
        fontSize: 14,
        color: 'white',
        fontFamily:'nunito',
    },
    cameraIconContainer: {
        marginBottom: "5%",
        marginRight: "5%",
        alignItems: 'flex-end',
        position: "absolute",
        bottom: 0,
        right: 0
    },
    cameraIcon: {
        backgroundColor: 'white',
        opacity: 0.3,
        width: 36,
        height: 36,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 24,
        alignSelf: 'center',
        marginTop: '3%',
        color: 'white',
        fontFamily:'NunitoSans-Bold',
        
    },
    phoneText: {
        marginLeft: '10%',
        color: '#7F7F8B',
        fontSize: 16,
        fontFamily:'NunitoSans-Regular',
        marginTop: '5%',
        marginBottom:"-3%"
    },
    emailText: {
        marginLeft: '10%',
        color: 'white',
        fontSize: 16,
        marginTop: '5%',
        fontFamily:'nunito',
        marginBottom:"-3%"
    },
    inputContainer: {
        paddingHorizontal: "4%"
    },
    logoutContainer: {
        marginLeft: '7%',
        marginTop: '5%'
    }
});

export default styles;

