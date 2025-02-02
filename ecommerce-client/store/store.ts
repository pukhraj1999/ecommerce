import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  settingsSlice, { SettingsState } from "@/store/features/SettingsSlice";


export interface RootState {
  settings: SettingsState,
}

const reducer = combineReducers({ settings : settingsSlice})

export const store = configureStore({
  reducer: reducer
});