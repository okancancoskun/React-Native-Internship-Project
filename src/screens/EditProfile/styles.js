import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    EditProfileStyle: {
        flex: 1,
        backgroundColor: '#32323D',
    },
    Edit: {
        margin: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ImageStyle: {
        marginTop: '3%',
        width: windowWidth / 2.9,
        height: windowHeight / 5,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 8,
    },
    onChangeMailStyle:{
        paddingHorizontal: 20, 
        flexDirection: 'row'
    },
    row: {
        fontSize: 20,
        color: 'white',
        fontFamily:'nunito',
        width: windowWidth / 1.1,
        paddingLeft: '6%',
        borderBottomColor: '#7F7F8B',
        borderBottomWidth: 1,
    },
    namepen: {
        flexDirection: 'row',
        
    },
    pen: {
        marginLeft: "-6%",
        marginTop: "3%"

    },
    userpencil: {
        marginLeft: "2%",
        marginTop: "7%"
    },
    cameraIcon: {
        fontSize: 16,
        color: 'white'
    },
    cameraIconContainer: {
        marginBottom: "5%",
        marginRight: "5%",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: "absolute",
        bottom: 0,
        right: 0
    },
    cameraIconView: {
        backgroundColor: 'white',
        opacity: 0.3,
        width: 36,
        height: 36,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: "4%"
    },
    userNameInput: {
        fontSize: 24,
        marginTop: '2%',
        color: 'white',
        fontFamily:'NunitoSans-Bold',
        
    },
    phoneText: {
        marginLeft: '10%',
        color: '#7F7F8B',
        fontSize: 16,
        fontFamily:'nunito',
        marginTop: '2%',
        marginBottom:"-3%"
    },
    emailText: {
        marginLeft: '10%',
        color: 'white',
        fontSize: 16,
        fontFamily:'nunito',
        marginTop: '2%',
        marginBottom:"-3%"
    }
});

export default styles;