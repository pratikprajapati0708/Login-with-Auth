import toast from "react-hot-toast";

export const usernameValidate = (values, props /* only available when using withFormik */) => {
    const errors = {};
    if (!values.username) {
        errors.username = toast.error('Username Required...!');
    } else if (values.username.includes(" ")) {
        errors.username = toast.error('Invalid Username..!');
    }

    return errors;
};

export const passwordValidate = (values, props) => {
    let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const errors = {};
    if (!values.password) {
        errors.password = toast.error('Password Required...!');
    } else if (values.password.includes(" ")) {
        errors.password = toast.error('Wrong Password!');
    } else if(!regularExpression.test(values.password)){
        errors.password = toast.error('password should contain special characters');
    } else if(values.password.length < 6){
        errors.password = toast.error('Password length should be greater than 6');
    }

    return errors;
};

export const passwordResetValidate = (values, props) => {
    const errors = {};
    if (values.password !== values.confirmpwd) {
        errors.password = toast.error('Password does not match. Please check again');
    }
    return errors;
};