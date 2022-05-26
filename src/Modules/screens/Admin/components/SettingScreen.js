import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { ConnectMqtt } from '../../../../Store/Actions/MqttAction';

function SettingScreen(props) {

    const [ip, setIP] = useState('canmatic.de')
    const [port, setPort] = useState(1884)
    const [title, setTitle] = useState('boat/control')

    const onConnect = () => {
        if (ip != '' && port != '' && title != '') {
            props.ConnectMqtt(ip, port, title)
        }
        else {
            console.log('please enterr valid fields')
        }
    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#0F0F0F', '#3E4345', '#202427']}>
            <StatusBar hidden />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{
                        textAlign: 'center',
                        margin: 50, fontSize: hp('6%'),
                        color: 'white',
                        fontFamily: "OpenSans-ExtraBold",
                    }}>Settings</Text>

                    <TextInput
                        style={styles.input}
                        value={ip}
                        onChangeText={(txt) => setIP(txt)}
                        placeholder="ip address"
                    />
                    <TextInput
                        style={styles.input}
                        value={port.toString()}
                        onChangeText={(txt) => setPort(txt)}
                        placeholder="port number"
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={(txt) => setTitle(txt)}
                        placeholder="topic"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="user name"
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="password"
                    />

                    <TouchableOpacity
                        onPress={() => onConnect()}
                        activeOpacity={0.7}
                        style={{
                            marginTop: 10,
                            alignItems: 'center', justifyContent: "center",
                            justifyContent: "center", alignSelf: "center",
                            width: Dimensions.get('screen').width / 1.99,
                            height: Dimensions.get('screen').height / 10,
                            backgroundColor: 'black',
                            elevation: 10,
                            padding: 20,
                            borderRadius: 10,
                        }}>
                        <Text style={{
                            fontSize: hp('4%'),
                            color: 'white',
                            fontFamily: "OpenSans-Bold",
                        }}>Connect</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}


const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps, {
    ConnectMqtt
})(SettingScreen);



const styles = StyleSheet.create({
    input: {
        height: Dimensions.get('screen').height / 10,
        width: Dimensions.get('screen').width / 2,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        fontSize: 32,
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'black',
        fontFamily: "OpenSans-Regular",
    },
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
});

