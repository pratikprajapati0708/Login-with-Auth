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
    let regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const errors = {};
    if (!values.password) {
        errors.password = toast.error('Password Required...!');
    } else if (values.password.includes(" ")) {
        errors.password = toast.error('Wrong Password!');
    } else if (!regularExpression.test(values.password)) {
        errors.password = toast.error('password should contain special characters');
    } else if (values.password.length < 6) {
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

//Validating Registration

export const RegisterValidate = (values, props) => {
    EmailAddressValidation(values, props);
    usernameValidate(values, props);
    passwordValidate(values, props);
}

export const EmailAddressValidation = (values, props) => {
    const errors = {};
    if (!values.email) {
        errors.email = toast.error("Email Address is required !");
    }
    else if (values.email.includes(' ')) {
        errors.email = toast.error("Invalid Email Address");
    }
}

export const ProfileValidation = (values, props) => {
    fnameValidate(values, props);
    lnameValidate(values, props);
    EmailAddressValidation(values, props);
}


export const fnameValidate = (values, props) => {
    const errors = {};
    if (!values.fname) {
        errors.fname = toast.error('First Name is Required...!');
    } else if (values.fname.includes(" ")) {
        errors.fname = toast.error('Invalid First Name..!');
    }

    return errors;
};
export const lnameValidate = (values, props) => {
    const errors = {};
    if (!values.lname) {
        errors.lname = toast.error('Last Name is Required...!');
    } else if (values.fname.includes(" ")) {
        errors.lname = toast.error('Invalid Last Name..!');
    }

    return errors;
};