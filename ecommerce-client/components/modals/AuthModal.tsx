import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { themeColor } from '@/themes';
import InputBox from '../InputBox';
import { login, signup } from '@/dynamicForms/authForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleSignup } from '@/store/features/SettingsSlice';
import ButtonBox from '../ButtonBox';

export default function AuthModal() {
    const dispatch = useDispatch();
    const isSignup = useSelector((state: RootState) => state.settings.isSignup);
    return (
        <View className='flex-1 mx-2 mb-4'>
            <ScrollView>
                <Text className='text-5xl font-bold my-2'>{isSignup ? "Sign Up" : "Log In"}</Text>
                <Text className='text-xl'>Please enter login details below</Text>
                <ButtonBox
                    type='secondary'
                    title='Google'
                    showIcon={true}
                    iconComponent={() => <Image source={require("@/assets/app-images/google.png")} style={{ height: 40, width: 40 }} />}
                    onPress={() => { }}
                />
                <View className='flex-row justify-center items-center'>
                    <View className='h-1 w-20' style={{ backgroundColor: themeColor.bgColor("1") }} />
                    <Text className='mx-2 text-2xl text-black'>OR</Text>
                    <View className='h-1 w-20' style={{ backgroundColor: themeColor.bgColor("1") }} />
                </View>
                <View className=''>
                    {!isSignup && login.map((item, index) => {
                        return <InputBox
                            key={index}
                            className="my-2"
                            label={item.label}
                            type={item.type}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType}
                        />
                    })}
                    {isSignup && signup.map((item, index) => {
                        return <InputBox
                            key={index}
                            className="my-2"
                            label={item.label}
                            type={item.type}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType}
                        />
                    })}
                    <ButtonBox
                        type='primary'
                        boxClassName='my-4'
                        textClassName='p-1'
                        title={isSignup ? "Sign Up" : "Log In"}
                        onPress={() => { }}
                    />
                    <View className='my-2 flex-row justify-center items-center'>
                        <Text className='text-xl'> {isSignup ? "You already have an Account? " : "Don't have an Account?"}</Text>
                        <TouchableOpacity onPress={() => { dispatch(toggleSignup()) }}>
                            <Text style={{ color: themeColor.text }} className='text-xl font-bold mx-1'>{isSignup ? "Log In" : "Sign Up"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}