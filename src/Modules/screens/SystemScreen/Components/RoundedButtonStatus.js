import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '../../../../Component/CustomText';
import NeumorphismButton from '../../../../Component/extra/NeumorphismsButton';

export default function RoundedButtonStatus({ onClick, active, title, top, right, round_button, navigation , left }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: top,
                left:left
            }}>
            {right ? (null) :
                <CustomText title={title} />
            }
            <NeumorphismButton
                onpress={onClick}
                circlebutton>
                <View
                    style={{
                        borderWidth: 3,
                        width: 15,
                        borderColor: active ? '#98FF31' : '#606060',
                    }}
                />
            </NeumorphismButton>
            {right ? <CustomText title={title} right /> :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({})