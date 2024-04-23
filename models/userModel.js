import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:[true, 'role is required'],
enum:['admin','organization','hospital'],
    },
    name:{
        
            type:String,
            required:function(){
                if(this.role==='user' || this.role==='hospital'|| this.role==='organization'){
                    return true
                }
                return false
            }

    },
    email:{
        type:String,
        require:[true,'email is require'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'password is required'],

    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true, 'address is required'],
    }
,
phone:
{
    type:String,
    required:[true, 'phone is required'],
}

},{timestamps:true});
module.exports = mongoose.model('users', userSchema)


