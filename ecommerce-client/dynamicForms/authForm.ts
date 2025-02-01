import { InputBoxProps } from "@/components/InputBox";

export const login: Array<InputBoxProps> = [{
    className: "my-2",
    label: 'Email',
    placeholder: 'Enter your email',
    keyboardType: 'email-address'
}, {
    className: "my-2",
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
}];

export const signup: Array<InputBoxProps> = [
    {
        className: "my-2",
        label: 'Name',
        placeholder: 'Enter your name',
        keyboardType: 'default'
    }, {
        className: "my-2",
        label: 'Email',
        placeholder: 'Enter your email',
        keyboardType: 'email-address'
    }, {
        className: "my-2",
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password'
    }]