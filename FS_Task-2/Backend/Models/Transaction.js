import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
        enum: ["Income", "Expense"]
    },
    amount:{
        type: Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type: String,
    },
    date: {
        type: String,
        default: Date.now()
    }
}, { timestamps: true });

const Transaction = model('Transaction', transactionSchema);

export default Transaction