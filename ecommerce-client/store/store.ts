import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsSlice, { SettingsState } from "@/store/features/SettingsSlice";
import formsSlice, { FormsState } from "./features/FormsSlice";


export interface RootState {
  forms: FormsState,
  settings: SettingsState,
}

const reducer = combineReducers({ settings: settingsSlice, forms: formsSlice })

export const store = configureStore({
  reducer: reducer
});