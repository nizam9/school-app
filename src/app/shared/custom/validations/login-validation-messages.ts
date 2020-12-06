export class ValidationMessages {
    static loginMessages = {
        email: {
            required: 'Email is required',
            pattern: 'Invalid email'
        },
        password: {
            required: 'Password is required',
        },
    }
    static registerMessages = {
        name: {
            required: 'Name is required',
            pattern: 'Invalid username'
        },
        firstname: {
            required: 'Firstname is required',
        },
        lastname: {
            required: 'Lastname is required',
        },
        email: {
            required: 'Email is required',
            pattern: 'Invalid email'
        },
        phone: {
            required: 'Phone number is required',
            pattern: 'Invalid phone number',
            minlength: 'Phone number must have 10 digits',
            maxlength: 'Phone number must have 10 digits'
        },
        address: {
            required: 'Address is required',
        },
        gender: {
            required: 'Gender is required',
        },
        dateofbirth: {
            required: 'Date of birth is required',
        },
        joiningdate: {
            required: 'Joining date is required',
        },
        password: {
            required: 'Password is required',
            pattern: 'Invalid, Please read password policy',
            minlength: 'Password must be at least 8 characters.',
            maxlength: 'Password can\'t be longer than 12 characters.'
        },
    }
}