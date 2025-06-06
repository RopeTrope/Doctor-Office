import mongoose from "mongoose";

let Pregled = new mongoose.Schema({
    cena:{
        type:Number
    },
    naziv:{
        type:String
    },
    specijalizacija:{
        type:String
    },
    trajanje:{
        type:Number
    }

})

export default mongoose.model('Pregled',Pregled,'pregledi')