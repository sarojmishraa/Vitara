const mongoose = require('mongoose')
const colors = require('colors')

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to mongodb ${mongoose.connction.host}`);
        
    } catch (error) {
        console.log(`mongodb data error :,${error}`.bgRed.white);
        
    }
    

}
module.exports=ConnectDB;