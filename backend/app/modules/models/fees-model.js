import mongoose from 'mongoose';
const studFeeSchema = new mongoose.Schema({
    donation: { type: String },
    termfee: { type: String },
    amount_paid: { type: String },
    balance_amount: { type: String },
    no_of_installments: { type: String },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Students' }
});

const feesSchema = mongoose.model('Fees', studFeeSchema)

export default feesSchema;