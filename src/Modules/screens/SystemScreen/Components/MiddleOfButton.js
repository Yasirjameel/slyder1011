import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NeumorphismButtonCircle from '../../../../Component/NeumorphismButtonCircle';

export default function MiddleOfButton({ top, left, active, right }) {
    return (
        <View
            style={{
                position: 'absolute',
                right: right,
                top: top,
                left: left,
              
            }}>
            {active ? (
                <NeumorphismButtonCircle green />
            ) : (
                <NeumorphismButtonCircle />
            )}
        </View>

    )
}

const styles = StyleSheet.create({})