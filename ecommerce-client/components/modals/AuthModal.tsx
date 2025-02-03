import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { themeColor } from '@/themes';
import InputBox from '../InputBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleSignup } from '@/store/features/SettingsSlice';
import ButtonBox from '../ButtonBox';
import { changeValue, getResult } from '@/store/features/FormsSlice';

export default function AuthModal() {
    const dispatch = useDispatch();
    const isSignup = useSelector((state: RootState) => state.settings.isSignup);
    const login = useSelector((state: RootState) => state.forms.login);
    const signup = useSelector((state: RootState) => state.forms.signup);

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
                            isErrorMsg={item.isErrorMsg}
                            errorMsg={item.errorMsg}
                            value={item.value}
                            onChangeText={(text) => {
                                dispatch(changeValue({ form: "login", id: item.id!, value: text }));
                            }}
                        />
                    })}
                    {isSignup && signup.map((item, index) => {
                        return <InputBox
                            key={index}
                            className="my-2"
                            label={item.label}
                            type={item.type}
                            value={item.value}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType}
                            onChangeText={(text) => {
                                dispatch(changeValue({ form: "signup", id: item.id!, value: text }));
                            }}
                        />
                    })}
                    <ButtonBox
                        type='primary'
                        boxClassName='my-4'
                        textClassName='p-1'
                        title={isSignup ? "Sign Up" : "Log In"}
                        onPress={() => {
                            if (isSignup) {
                                dispatch(getResult({ form: "signup" }));
                            } else {
                                dispatch(getResult({ form: "login" }));
                            }
                        }}
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