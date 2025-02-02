import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColor } from '@/themes'

type ButtonBoxProps = {
    boxClassName?: string;
    textClassName?: string;
    type: "primary" | "secondary";
    title: string;
    iconComponent?: () => React.JSX.Element
    showIcon?: boolean;
    onPress: () => void;
}

export default function ButtonBox({
    boxClassName = "",
    textClassName = "",
    type = "primary",
    showIcon = false,
    iconComponent,
    title = "",
    onPress
}: ButtonBoxProps) {
    return (
        <>
            <TouchableOpacity className={'flex-row justify-center items-center p-4 rounded-2xl ' + boxClassName}
                style={type === "primary" ? {
                    backgroundColor: themeColor.bgColor('1'),
                    boxShadow: themeColor.shadowB
                } : {
                    backgroundColor: themeColor.secondary,
                    borderWidth: 2,
                    borderColor: themeColor.bgColor('1'),
                    boxShadow: themeColor.shadowB
                }}
                onPress={onPress}
            >
                {showIcon && iconComponent && iconComponent()}
                <Text style={{ color: type === "secondary" ? themeColor.text : themeColor.secondary }} className={'font-bold text-3xl ' + textClassName}> {title} </Text>
            </TouchableOpacity>
        </>
    )
}