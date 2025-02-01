import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { themeColor } from '@/themes';
import InputBox from '../InputBox';
import { login, signup } from '@/dynamicForms/authForm';

export default function AuthModal() {
    const [isSignup, setSignup] = useState<boolean>(false);
    return (
        <View className='flex-1 mx-2 mb-4'>
            <ScrollView>
            <Text className='text-5xl font-bold my-2'>{isSignup ? "Sign Up" : "Log In"}</Text>
            <Text className='text-xl'>Please enter login details below</Text>
            <TouchableOpacity className='flex-row justify-center items-center p-4 rounded-2xl'
                style={{
                    backgroundColor: themeColor.secondary,
                    borderWidth: 2,
                    borderColor: themeColor.bgColor('1'),
                    boxShadow: themeColor.shadowB
                }}
            >
                <Image source={require("@/assets/app-images/google.png")} style={{ height: 40, width: 40 }} />
                <Text style={{ color: themeColor.text }} className='font-bold text-3xl'> Google</Text>
            </TouchableOpacity>
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
                <TouchableOpacity className='my-4 flex-row justify-center items-center p-4 rounded-2xl'
                    style={{
                        backgroundColor: themeColor.bgColor('1'),
                        boxShadow: themeColor.shadowB
                    }}
                >
                    <Text style={{ color: themeColor.secondary }} className='p-1 font-bold text-3xl'>{isSignup ? "Sign Up" : "Log In"}</Text>
                </TouchableOpacity>
                <View className='my-2 flex-row justify-center items-center'>
                    <Text className='text-xl'> {isSignup ?  "You already have an Account? " : "Don't have an Account?" }</Text>
                    <TouchableOpacity onPress={() => { setSignup(!isSignup) }}>
                        <Text style={{ color: themeColor.text }} className='text-xl font-bold mx-1'>{isSignup ?  "Log In" : "Sign Up" }</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}