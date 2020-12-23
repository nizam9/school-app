import mongoose from 'mongoose';
const feeTransactionSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Students' },
    fees_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fees' },
    payment_type:{type:String}, // tution_fee , donation , library_fee , book_fee , sports_fee
    created_date: {type: Date, default: Date.now},
    amount_paid: {type:String}    
});

const feesTransactionSchema = mongoose.model('FeeTransactions', feeTransactionSchema)

export default feesTransactionSchema;