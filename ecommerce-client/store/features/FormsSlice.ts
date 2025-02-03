import { login, signup } from "@/dynamicForms/authForm";
import InputModel from "@/models/InputModel";
import UserModel from "@/models/UserModel";
import { getFormResult, updateFormValue } from "@/utils/FormsHelper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormsState {
    login: Array<InputModel>,
    signup: Array<InputModel>,
    userDetail: UserModel
}

const initialState: FormsState = {
    login: login,
    signup: signup,
    userDetail: {} as UserModel
};

export const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<{ form: string, id: string, value: string }>) => {
            const { form } = action.payload;
            switch (form) {
                case "login":
                    state.login = updateFormValue(action.payload, state.login);
                    break;
                case "signup":
                    state.signup = updateFormValue(action.payload, state.signup);
                    break;
                default:
                    break;
            }
        },
        getResult: (state, action: PayloadAction<{ form: string }>) => {
            const { form } = action.payload;
            switch (form) {
                case "login":
                    state.userDetail = getFormResult(state.login) as UserModel;
                    break;
                case "signup":
                    state.userDetail = getFormResult(state.signup) as UserModel;
                    break;
                default:
                    break;
            }
        }

    }
});

export const { changeValue, getResult } = formsSlice.actions;

export default formsSlice.reducer;