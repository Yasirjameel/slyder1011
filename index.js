import React from 'react';
import { AppRegistry, Text, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from './src/Store';


const AppRedux = () => {
    return (
        <Provider {...{ store }}>
            <SafeAreaProvider>
                <App />
            </SafeAreaProvider>
        </Provider>
    )
};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppRedux);
