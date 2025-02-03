import { TextInputProps } from "react-native";

export default interface InputModel {
    className?: string,
    id?: string,
    label: string,
    type?: "text" | "password",
    placeholder: string,
    isErrorMsg?: boolean,
    errorMsg?: string,
    value?: string,
    keyboardType?: TextInputProps['keyboardType'],
}