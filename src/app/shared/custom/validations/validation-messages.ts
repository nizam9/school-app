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
    static studentRegisterMessages = {
        firstname: { required: 'Required', pattern: '' },
        lastname: { required: 'Required', pattern: '' },
        middlename: { required: 'Required', pattern: '' },
        rollNumber: { required: 'Required', pattern: '' },
        gender: { required: 'Required', pattern: '' },
        dob: { required: 'Required', pattern: '' },
        age: { required: 'Required', pattern: '' },
        class: { required: 'Required', pattern: '' },
        section: { required: 'Required', pattern: '' },
        joining_date: { required: 'Required', pattern: '' },
        fathername: { required: 'Required', pattern: '' },
        mothername: { required: 'Required', pattern: '' },
        father_mobile: {
            required: 'Required',
            pattern: 'Invalid number',
            minlength: 'Phone number must have 10 digits',
            maxlength: 'Phone number must have 10 digits',
        },
        mother_mobile: {
            required: 'Required',
            pattern: 'Invalid number',
            minlength: 'Phone number must have 10 digits',
            maxlength: 'Phone number must have 10 digits'
        },
        father_email: { required: 'Required', pattern: 'Invalid email' },
        mother_email: { required: 'Required', pattern: 'Invalid email' },
        father_occupation: { required: 'Required', pattern: '' },
        mother_occupation: { required: 'Required', pattern: '' },
        gaurdian: { required: 'Required', pattern: '' },
        address: { required: 'Required', pattern: '' },
        aadhar: { required: 'Required', pattern: '' },
        disability: { required: 'Required', pattern: '' },
        donation: { required: 'Required', pattern: '' },
        termfee: { required: 'Required', pattern: '' },
        amount_paid: { required: 'Required', pattern: '' },
        balance_amount: { required: 'Required', pattern: '' },
        no_of_installments: { required: 'Required', pattern: '' },
        paymentFor: { required: 'Required', pattern: '' }
    }
}