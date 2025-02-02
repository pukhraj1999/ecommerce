import { createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
    isAuthModalVisible: boolean;
    isSignup: boolean;
    isPasswordVisible: boolean;
}

const initialState: SettingsState = {
    isAuthModalVisible: false,
    isSignup: false,
    isPasswordVisible: false,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleAuthModalVisible: (state) => {
            state.isAuthModalVisible = !state.isAuthModalVisible;
        },        
        toggleSignup: (state) => {
            state.isSignup = !state.isSignup;
        },
        togglePasswordVisible: (state) => {
            state.isPasswordVisible = !state.isPasswordVisible;
        }
    }
});

export const { toggleAuthModalVisible, toggleSignup, togglePasswordVisible } = settingsSlice.actions;

export default settingsSlice.reducer;