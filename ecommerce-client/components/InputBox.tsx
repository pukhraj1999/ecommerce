import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColor } from '@/themes'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { togglePasswordVisible } from '@/store/features/SettingsSlice';
import InputModel from '@/models/InputModel';

export type InputBoxProps = InputModel & {
    onChangeText?: (text: string) => void,
};

export default function InputBox({
    className,
    id,
    label,
    placeholder,
    type = "text",
    value = "",
    onChangeText,
    isErrorMsg,
    errorMsg,
    keyboardType }: InputBoxProps) {
    const dispatch = useDispatch();
    const isPasswordVisible = useSelector((state: RootState) => state.settings.isPasswordVisible)
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
                value={value}
                onChangeText={onChangeText}
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
                        onChangeText={onChangeText}
                        value={value}
                        passwordRules={"required: lower; required: upper; required: digit; required: [-]; minlength: 8;"}
                        placeholderTextColor={themeColor.bgColor("0.5")}
                    ></TextInput>
                    <TouchableOpacity onPress={() => { dispatch(togglePasswordVisible()) }}>
                        {isPasswordVisible && <Fontisto name="eye" size={20} color="black" />}
                        {!isPasswordVisible && <Fontisto name="low-vision" size={30} color="black" />}
                    </TouchableOpacity>
                </View>
            )}
            {isErrorMsg && <Text className='ml-4 text-xl text-red-500'>{errorMsg}</Text>}
        </View>
    )
}