import { View, ImageBackground, SafeAreaView, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomModal from "@/components/modals/CustomModal";
import { BlurView } from "expo-blur";
import { themeColor } from "@/themes";
import AuthModal from "@/components/modals/AuthModal";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModalVisible } from "@/store/features/SettingsSlice";

export default function Index() {
  const dispatch = useDispatch();
  const isAuthModalVisible = useSelector((state: RootState) => state.settings.isAuthModalVisible);
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View
        className="flex-1"
      >
        <ImageBackground
          imageStyle={{ resizeMode: "stretch" }}
          source={require("@/assets/app-images/main.jpg")}
          className="flex-1"
        >
          {isAuthModalVisible && (
            <BlurView intensity={50} tint="dark" style={styles.blurBackground} />
          )}
          <SafeAreaView className="flex-1">
            <View className="my-20 mx-2 justify-center items-center">
              <Text className="text-white text-6xl font-bold">DevX Store</Text>
              <Text className="text-white text-2xl font-bold text-center">A Single place for all your needs</Text>
            </View>
            <View className="my-20 mx-2 flex-grow justify-end items-center">
              <TouchableOpacity className="p-4 rounded-2xl" onPress={() => {
                dispatch(toggleAuthModalVisible());
              }}>
                <Text
                  className="text-white text-5xl font-bold">Let's Begin</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <CustomModal
        height={"85%"}
        isVisible={isAuthModalVisible}
        onClose={() => dispatch(toggleAuthModalVisible())}
      >
        <AuthModal />
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  blurBackground: {
    ...StyleSheet.absoluteFillObject, // Fills the entire screen
    zIndex: 1, // Places it beneath the modal content
  },
});