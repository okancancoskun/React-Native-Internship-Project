import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
} from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import Login from '../LoginScreen/Login'
import styles from "./styles"


const slides = [
    {
        key: 1,
        text: 'Look for points on the map',
        image: require('./src/assets/maps.png'),
        image2: require('./src/assets/event.png')
    },
    {
        key: 2,
        text: 'Watch the ',
        boldText: "AR ",
        text2: "object ",
        text3: "\non your mobile",
        image: require('./src/assets/iphone.png')
    },
    {
        key: 3,
        text: 'Take a photo of the ',
        boldText2: "AR ",
        text4: "object",
        image: require('./src/assets/Frame.png')
    },
    {
        key: 4,
        text: 'See upcoming events',
        image: require('./src/assets/smedia.png')

    }
];
export default class Hintscreen extends React.Component {
    state = {
        showRealApp: false,
    }
    _renderNextButton = () => {
        return (
            <View style={styles.btnContainer}>
                <Text style={styles.skipText}>Skip</Text>
                <Image style={styles.arrowImage} source={require('./src/assets/arrow.png')} />
            </View>
        )
    }
    _renderDoneButton = () => {
        return (
            <View style={styles.btnContainer}>
                <Text style={styles.skipText}>Skip</Text>
                <Image style={styles.arrowImage} source={require('./src/assets/arrow.png')} />
            </View>
        );
    };
    _renderItem = ({ item }) => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.mainImage}>
                        <Image source={item.image} style={styles.images} />
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.slide}>
                            <Text style={styles.text}>{item.text}</Text>
                            <Text style={styles.boldText}>{item.boldText}</Text>
                            <Text style={styles.text2}>{item.text2}</Text>
                        </View>
                        <View style={styles.text3View}>
                            <Text style={styles.text}>{item.text3}</Text>
                        </View>
                        <View style={styles.text4View}>
                            <Text style={styles.boldText}>{item.boldText2}</Text>
                            <Text style={styles.text}>{item.text4}</Text>
                        </View>

                    </View>

                </View>
                <View style={styles.eventImage}>
                    <Image source={item.image2} style={styles.event}></Image>
                </View>

            </SafeAreaView>
        )
    }
    _onDone = () => {
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {

            return (
                <Login />
            );
        }
        else {
            return (
                <AppIntroSlider data={slides} renderDoneButton={this._renderDoneButton} renderNextButton={this._renderNextButton} renderItem={this._renderItem} onDone={this._onDone}></AppIntroSlider>
            );
        }
    }
}

