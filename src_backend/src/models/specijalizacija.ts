import mongoose from "mongoose";

let Specijalizacija = new mongoose.Schema({
    naziv:{
        type:String
    }
})

export default mongoose.model('Specijalizacija',Specijalizacija,'specijalizacije')