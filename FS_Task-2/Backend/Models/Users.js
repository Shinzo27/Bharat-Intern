import { Schema, model } from 'mongoose'; // Erase if already required

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    totalIncome: {
        type: Number
    }
});

const User = model('User', userSchema);
//Export the model
export default User