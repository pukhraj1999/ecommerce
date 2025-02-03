import InputModel from "@/models/InputModel";

export const login: Array<InputModel> = [{
    className: "my-2",
    id: "email",
    label: 'Email',
    value: "",
    placeholder: 'Enter your email',
    keyboardType: 'email-address', 
}, {
    className: "my-2",
    id: "password",
    label: 'Password',
    value: "",
    placeholder: 'Enter your password',
    type: 'password'
}];

export const signup: Array<InputModel> = [
    {
        className: "my-2",
        id: "name",
        label: 'Name',
        value: "",
        placeholder: 'Enter your name',
        keyboardType: 'default'
    }, {
        className: "my-2",
        id: "email",
        label: 'Email',
        value: "",
        placeholder: 'Enter your email',
        keyboardType: 'email-address'
    }, {
        className: "my-2",
        id: "password",
        label: 'Password',
        value: "",
        placeholder: 'Enter your password',
        type: 'password'
    }]