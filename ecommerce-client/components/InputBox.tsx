import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeColor } from '@/themes'
import Fontisto from '@expo/vector-icons/Fontisto';

export type InputBoxProps = {
    className?: string,
    label: string,
    type?: "text" | "password",
    placeholder: string,
    isErrorMsg?: boolean,
    errorMsg?: string,
    keyboardType?: TextInputProps['keyboardType'],
}

export default function InputBox({ className, label, placeholder, type = "text", isErrorMsg, errorMsg, keyboardType }: InputBoxProps) {
    const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
    return (
        <View className={className}>
            <Text className='text-2xl font-bold'>{label}</Text>
            {type === "text" && <TextInput
                style={{
                    backgroundColor: themeColor.secondary,
                    color: themeColor.text,
                }}
                className='p-4 border-2 border-black rounded-xl text-3xl'
                placeholder={placeholder}
                keyboardType={keyboardType}

                placeholderTextColor={themeColor.bgColor("0.5")}
            ></TextInput>}
            {type === "password" && (
                <View
                    className='flex-row items-center p-4 border-2 border-black rounded-xl'
                    style={{
                        backgroundColor: themeColor.secondary,

                    }}>
                    <TextInput
                        style={{ color: themeColor.text }}
                        className='text-3xl flex-grow'
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={!isPasswordVisible}
                        passwordRules={"required: lower; required: upper; required: digit; required: [-]; minlength: 8;"}
                        placeholderTextColor={themeColor.bgColor("0.5")}
                    ></TextInput>
                    <TouchableOpacity onPress={() => { setPasswordVisibility(!isPasswordVisible) }}>
                        {isPasswordVisible && <Fontisto name="eye" size={20} color="black" />}
                        {!isPasswordVisible && <Fontisto name="low-vision" size={30} color="black" />}
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )
}