import mongoose from "mongoose";

let Pacijent = new mongoose.Schema({

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
    slika:{
        type:String
    },
    zakazani_pregledi:{
        type:Array
    },
    izvestaji:{
        type:Array
    }

})
export default mongoose.model('Pacijent',Pacijent,'pacijenti')