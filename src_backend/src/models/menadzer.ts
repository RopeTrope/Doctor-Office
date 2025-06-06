import mongoose from "mongoose";

let Menadzer = new mongoose.Schema({
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    korisnicko_ime:{
        type:String
    },
    lozinka:{
        type:String
    }
})
export default mongoose.model('Menadzer',Menadzer,'menadzeri')