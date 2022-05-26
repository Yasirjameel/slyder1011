import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ToastAndroid
} from 'react-native';
import init from 'react_native_mqtt';
import {
    CHANGE_SAILING, CHANGE_WINDSPEED
} from './type';

export const ConnectMqtt = (ip, port, title) => {
    return async dispatch => {
        console.log("EEEEEEEEEEEEE")
        init({
            size: 10000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {},
        });
        // var tboxServer = "canmatic.de";
        // var tboxPort = 1884;
        // var tboxTopic = "boat/control";
        var tboxServer = ip;
        var tboxPort = parseInt(port);
        var tboxTopic = title;
        var client = new Paho.MQTT.Client(tboxServer, Number(tboxPort), "GMM  - Control");
        // client.connect({ onSuccess: onConnect, useSSL: true ,userName:"brokerUsername", password:"brokerPassword" })
        client.connect({ onSuccess: onConnect });
        function onConnect() {
            client.subscribe(tboxTopic);
            ToastAndroid.show('Connection Successfull!', ToastAndroid.LONG)
        }

        // console.log("Client" , client)
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = (msg) => {
            onMessageArrived(msg, dispatch)
        };
        // client.onConnectionLost = onConnectionLost;

    }
}

const onMessageArrived = (theMessage, dispatch) => {
    console.log("onMessageArrived:" + theMessage.destinationName, theMessage.payloadString);
    const split = theMessage.payloadString.split(';')  
    if (split[0] == 'n2k' && split[1] == 'wind_data') {
        dispatch({
            type: CHANGE_WINDSPEED, payload: {
                WeatherSpeed: split[5],
                AirTemp: split[3],
                Humidity: split[4],
                AirPressure: split[7],
                WindAngle: split[6],
                TimeHour:split[split.length - 3]
            }
        })
    }
    else if (split[0] == 'n2k' && split[1] == 'vessel_heading') {
        dispatch({
            type: CHANGE_SAILING, payload: {
                Sog: split[2],
                Twa: split[3],
                Tws: split[4],
            }
        })
    }
    else if (split[0] == 'n2k' && split[1] == 'environmental_params') {
        // dispatch({
        //     type: CHANGE_SAILING, payload: {
        //         Sog: split[2],
        //         Twa: split[3],
        //         Tws: split[4],

        //     }
        // })
    }
}

function onConnectionLost(responseObject) {
    ToastAndroid.show('Connection Lost!  Kindly Connect it Again', ToastAndroid.LONG)
    console.log("onConnectionLost:" + responseObject);
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);

    }
}

function Connection() {
    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        sync: {},
    });
    var tboxServer = "canmatic.de";
    var tboxPort = 1884;
    var tboxTopic = "boat/control";
    var client = new Paho.MQTT.Client(tboxServer, Number(tboxPort), "GMM  - Control");
    return client
}