import mongoose from "mongoose";

let Lekar = new mongoose.Schema({

    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    adresa:{
        type:String
    },
    kontakt:{
        type:Number
    },
    lozinka:{
        type:String
    },
    
    imejl:{
        type:String
    },
    korisnicko_ime:{
        type:String
    },
    broj_licence:{
        type:Number
    },
    specijalizacija:{
        type:String
    },
    ogranak:{
        type:String
    },
    slika:{
        type:String
    },
    pregledi:{
        type:Array
    }

})
export default mongoose.model('Lekar',Lekar,'lekari')