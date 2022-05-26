import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import CustomText from '../../../../Component/CustomText'

export default function EmptyRoundedButton({ title, top,right }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: top,
            }}>
            {right ? (null) :
                <CustomText title={title} />
            }
            <View
                style={{
                    marginLeft: 18,
                    borderWidth: 1,
                    padding: Dimensions.get('screen').height / 50,
                    borderColor: 'silver',
                    borderRadius: 30,
                    marginRight: 10,
                }}
            />
            {right ? <CustomText title={title} right /> :
                null
            }
        </View>

    )
}

const styles = StyleSheet.create({})