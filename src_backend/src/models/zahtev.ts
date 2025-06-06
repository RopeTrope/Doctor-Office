import mongoose from "mongoose";

let Zahtev = new mongoose.Schema({

    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    specijalizacija:{
        type:String
    },
    adresa:{
        type:String
    },
    kontakt:{
        type:Number
    },
    password:{
        type:String
    },
    broj_licence:{
        type:Number
    },
    imejl:{
        type:String
    },
    korisnicko_ime:{
        type:String
    },
    ogranak:{
        type:String
    },
    tip:{
        type:String
    },
    status:{
        type:String
    },
    slika:{
        type:String
    }

})
export default mongoose.model('Zahtev',Zahtev,'zahtevi')