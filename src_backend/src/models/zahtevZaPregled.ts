import mongoose from "mongoose";

let ZahtevZaPregled = new mongoose.Schema({
    naziv:{
        type:String
    },
    cena:{
        type:Number
    },
    trajanje:{
        type:Number
    },
    specijalizacija:{
        type:String
    },
    status:{
        type:String
    }

})
export default mongoose.model('ZahtevZaPregled',ZahtevZaPregled,'zahteviZaPreglede')