import express, { Request } from 'express'
import zahtev from '../models/zahtev'
import pacijent from '../models/pacijent'
import lekar from '../models/lekar'
import pregled from '../models/pregled'
import menadzer from '../models/menadzer'
import zahtevZaPregled from '../models/zahtevZaPregled'
import specijalizacija from '../models/specijalizacija'
import { ObjectId } from 'mongodb'


export class UserController{



    login = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime
        let lozinka = req.body.lozinka
        let tip = req.body.tip
        if(tip == 'pacijent'){
            pacijent.findOne({'korisnicko_ime':korisnicko_ime,'lozinka':lozinka},(err,kor)=>{
                if(err)console.log(err)
                else res.json(kor)
            })
        }else if(tip == 'lekar'){
            lekar.findOne({'korisnicko_ime':korisnicko_ime,'lozinka':lozinka},(err,lek)=>{
                if(err)console.log(err)
                else res.json(lek)
            })
        }


    }
    registruj = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime
        let prezime = req.body.prezime
        let korisnicko_ime = req.body.korisnicko_ime
        let lozinka = req.body.lozinka
        let adresa = req.body.adresa
        let kontakt = req.body.kontakt
        let imejl = req.body.imejl
        let slika = req.body.slika
       

        zahtev.collection.insertOne({'ime':ime,'prezime':prezime,'korisnicko_ime':korisnicko_ime,'lozinka':lozinka,'adresa':adresa,
    'kontakt':kontakt,'imejl':imejl,'status':null,'slika':slika})


    }
    dohvatiZahtev = (req:express.Request,res:express.Response)=>{

        let korisnicko_ime = req.body.korisnicko_ime

        zahtev.findOne({'korisnicko_ime':korisnicko_ime},(err,z)=>{
            if(err)console.log(err)
            else res.json(z);
        })
    }
    dohvatiKorisnika = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime
        let old_pass = req.body.old_pass


        pacijent.findOne({'korsnicko_ime':korisnicko_ime,'lozinka':old_pass},(err,k)=>{
            if(err)console.log(err)
            else res.json(k)
        })

    }

    azurirajSifru = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime
        let new_pass = req.body.new_pass

        pacijent.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'lozinka':new_pass}});
    }

    dohvatiSveLekare = (req:express.Request,res:express.Response)=>{

        lekar.find({},(err,l)=>{
            if(err)console.log(err)
            else res.json(l);

        })


    }

    pronadjiLekare = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime;
        let prezime = req.body.prezime
        let spec = req.body.spec
        let ogranak = req.body.ogranak
        lekar.find({'ime':{$regex:ime},'prezime':{$regex:prezime},'specijalizacija':{$regex:spec},'ogranak':{$regex:ogranak}},(err,l)=>{
            if(err) console.log(err)
            else res.json(l)
        })
    }
    dohvatiPacijenta = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime

        pacijent.findOne({'korisnicko_ime':korisnicko_ime},(err,p)=>{
            if(err)console.log(err)
            else res.json(p)
        })

    }
    azurirajPodatke = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime
        let prezime = req.body.prezime
        let korisnicko_ime = req.body.korisnicko_ime

        let imejl = req.body.imejl
        let kontakt = req.body.kontakt
        let adresa = req.body.adresa
        let slika = req.body.slika

        pacijent.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'ime':ime,'prezime':prezime,'imejl':imejl,'kontakt':kontakt,'adresa':adresa,'slika':slika}})


    }
    dohvatiLekara = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime

        lekar.findOne({'korisnicko_ime':korisnicko_ime},(err,l)=>{
            if(err)console.log(err)
            else res.json(l)
        })

    }
    azurirajPodatkeLekar = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime
        let prezime = req.body.prezime
        let korisnicko_ime = req.body.korisnicko_ime
        let spec = req.body.specijalizacija
        let broj_licence = req.body.broj_licence
        let kontakt = req.body.kontakt
        let adresa = req.body.adresa
        let slika = req.body.slika

        lekar.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'ime':ime,'prezime':prezime,'specijalizacija':spec,'broj_licence':broj_licence,'kontakt':kontakt,'adresa':adresa,'slika':slika}})


    }

    dodajPregled = (req:express.Request,res:express.Response)=>{
        let korisnicko_ime = req.body.korisnicko_ime
        let pregled = req.body.pregled
        let datum = req.body.datum
        let vreme = req.body.vreme
        let ime_lekara = req.body.ime_lekara

        
        pacijent.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$push:{'zakazani_pregledi':{_id: new ObjectId(),'naziv':pregled,'datum':datum,'vreme':vreme,'lekar':ime_lekara,'status':false}}})

    }

    otkaziPregled = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let lek = req.body.lek
        let datum = req.body.datum
        let vreme = req.body.vreme
        let korisnicko_ime = req.body.korisnicko_ime

        pacijent.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$pull:{'zakazani_pregledi':{'naziv':naziv,'datum':datum,'vreme':vreme,'lekar':lek}}})


    }
    dohvatiSvePreglede = (req:express.Request,res:express.Response)=>{

        let spec = req.body.spec

        pregled.find({'specijalizacija':spec},(err,p)=>{
            if(err)console.log(err)
            else res.json(p)

        })
        

    }
    dodajUslugu = (req:express.Request,res:express.Response)=>{
        let kor_ime = req.body.kor_ime

        let naziv = req.body.naziv
        let cena = req.body.cena
        let trajanje = req.body.trajanje

        lekar.collection.updateOne({'korisnicko_ime':kor_ime},{$push:{'pregledi':{'cena':cena,'trajanje':trajanje,'naziv':naziv}}})

    }
    izbaciUslugu = (req:express.Request,res:express.Response)=>{

        //izbacivanje pregleda iz niza pregledi lekara
        let kor_ime = req.body.kor_ime

        let naziv = req.body.naziv

        lekar.collection.updateOne({'korisnicko_ime':kor_ime},{$pull:{'pregledi':{'naziv':naziv}}})
    }
    dohvatiSvePacijente = (req:express.Request,res:express.Response)=>{



        pacijent.find({},(err,p)=>{
            if(err)console.log(err)
            else res.json(p)
        })
    }

    loginMenadzer =(req:express.Request,res:express.Response)=>{
        
        let kor_ime = req.body.kor_ime
        let lozinka = req.body.lozinka


        menadzer.findOne({'korisnicko_ime':kor_ime,'lozinka':lozinka},(err,m)=>{
            if(err)console.log(err)
            else res.json(m)
        })

    }

    obrisiLekara =(req:express.Request,res:express.Response)=>{
        let kor_ime = req.body.kor_ime

        lekar.collection.deleteOne({'korisnicko_ime':kor_ime})

    }
    obrisiPacijenta =(req:express.Request,res:express.Response)=>{

        let kor_ime = req.body.kor_ime

        pacijent.collection.deleteOne({'korisnicko_ime':kor_ime})
    }

    dohvatiSveZahteve = (req:express.Request,res:express.Response)=>{

        zahtev.find({'status':null},(err,z)=>{
            if(err)console.log(err)
            else res.json(z)
        })
    }
    prihvatiZahtev = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime
        let prezime = req.body.prezime
        let imejl = req.body.imejl
        let kontakt = req.body.kontakt
        let lozinka = req.body.lozinka
        let slika = req.body.slika
        let adresa = req.body.adresa
        let korisnicko_ime = req.body.korisnicko_ime


        zahtev.collection.updateOne({'korisnicko_ime':korisnicko_ime},{$set:{'status':"Prihvaceno"}})

        pacijent.collection.insertOne({'ime':ime,'prezime':prezime,'adresa':adresa,'kontakt':kontakt,'imejl':imejl,
    'korisnicko_ime':korisnicko_ime,'lozinka':lozinka,'slika':slika,'zakazani_pregledi':[],'izvestaji':[]})

    }
    odbijZahtev = (req:express.Request,res:express.Response)=>{
        let kor_ime = req.body.kor_ime

        zahtev.collection.updateOne({'korisnicko_ime':kor_ime},{$set:{'status':'Odbijeno'}})
    }

    dodajLekara = (req:express.Request,res:express.Response)=>{
        let ime = req.body.ime
        let prezime = req.body.prezime
        let imejl=req.body.imejl
        let kontakt=req.body.kontakt
        let korisnicko_ime=req.body.korisnicko_ime
        let lozinka=req.body.lozinka
        let slika=req.body.slika
        let adresa=req.body.adresa
        let specijalizacija=req.body.specijalizacija
        let ogranak=req.body.ogranak
        let broj_licence=req.body.broj_licence

        lekar.collection.insertOne({'ime':ime,'prezime':prezime,'imejl':imejl,'kontakt':kontakt,'korisnicko_ime':korisnicko_ime,
    'lozinka':lozinka,'slika':slika,'adresa':adresa,'specijalizacija':specijalizacija,'ogranak':ogranak,'broj_licence':broj_licence,
'pregledi':[]})
    }

    dodajZahtevZaPregled = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let cena = req.body.cena
        let trajanje = req.body.trajanje
        let specijalizacija = req.body.specijalizacija

        zahtevZaPregled.collection.insertOne({'naziv':naziv,'cena':cena,'trajanje':trajanje,'specijalizacija':specijalizacija,'status':null})

    }

    dohvatiSveZahteveZaPreglede = (req:express.Request,res:express.Response)=>{


        zahtevZaPregled.find({'status':null},(err,z)=>{
            if(err)console.log(err)
            else res.json(z)
        })
    }
    odbijZahtevZaPregled = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv

        zahtevZaPregled.collection.updateOne({'naziv':naziv},{$set:{'status':'Odbijeno'}})
    }
    prihvatiZahtevZaPregled = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let spec = req.body.spec
        let cena = req.body.cena
        let trajanje = req.body.trajanje


        zahtevZaPregled.collection.updateOne({'naziv':naziv},{$set:{'status':"Prihvaceno"}})

        pregled.collection.insertOne({'naziv':naziv,'specijalizacija':spec,'cena':cena,'trajanje':trajanje})

    }

    dohvatiBasSvePreglede = (req:express.Request,res:express.Response)=>{


        pregled.find({},(err,p)=>{
            if(err)console.log(err)
            else res.json(p)
        })

    }
    dohvatiPregled = (req:express.Request,res:express.Response)=>{

        let naziv = req.body.naziv

        pregled.findOne({'naziv':naziv},(err,p)=>{
            if(err)console.log(err)
            else res.json(p)
        })
    }

    azurirajPregled = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let spec = req.body.spec
        let cena = req.body.cena
        let trajanje = req.body.trajanje
        let ime = req.body.ime

        pregled.collection.updateOne({'naziv':ime},{$set:{'naziv':naziv,'cena':cena,'specijalizacija':spec,'trajanje':trajanje}})

    }
    obrisiPregled = (req:express.Request,res:express.Response)=>{
        //obrisi pregled iz pregledi na osnovu imena i spec

        let naziv = req.body.naziv
        let spec = req.body.spec

        pregled.collection.deleteOne({'naziv':naziv,'specijalizacija':spec})
    }

    dohvatiMenadzera = (req:express.Request,res:express.Response)=>{
        let kor_ime = req.body.kor_ime


        menadzer.findOne({'korisnicko_ime':kor_ime},(err,k)=>{
            if(err)console.log(err)
            else res.json(k)
        })
    }

    promenaLozinkeLekar = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let pass = req.body.pass

        lekar.findOne({'korisnicko_ime':naziv,'lozinka':pass},(err,l)=>{
            if(err)console.log(err)
            else res.json(l)
        })
    }
    azurirajSifruLekar = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let pass = req.body.pass

        lekar.collection.updateOne({'korisnicko_ime':naziv},{$set:{'lozinka':pass}})
    }
    promenaLozinkeMenadzer = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let pass = req.body.pass

        menadzer.findOne({'korisnicko_ime':naziv,'lozinka':pass},(err,m)=>{
            if(err)console.log(err)
            else res.json(m)
        })
    }
    azurirajSifruMenadzer = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let pass = req.body.pass

        menadzer.collection.updateOne({'korisnicko_ime':naziv},{$set:{'lozinka':pass}})
    }
    dohvatiSveSpecijalizacije = (req:express.Request,res:express.Response)=>{

        specijalizacija.find({},(err,s)=>{
            if(err)console.log(err)
            else res.json(s)
        })

    }

    dodajPregledPoSpec = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let spec = req.body.spec
        let cena = req.body.cena
        let trajanje = req.body.trajanje

        pregled.collection.insertOne({'naziv':naziv,'specijalizacija':spec,'cena':cena,'trajanje':trajanje})


    }

    dodajSpec = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv

        specijalizacija.collection.insertOne({'naziv':naziv})


    }
    dodajIzvestaj = (req:express.Request,res:express.Response)=>{
        let datum  = req.body.datum
        let vreme= req.body.vreme
        let ime_lekara  = req.body.ime_lekara
        let spec_lekara  = req.body.spec_lekara
        let razlog  = req.body.razlog
        let dijagnoza  = req.body.dijagnoza
        let terapija  = req.body.terapija
        let naredni = req.body.naredni
        let korisnicko_ime = req.body.korisnicko_ime
        let pac = req.body.pacijent


        pacijent.collection.updateOne({'korisnicko_ime':pac},{$push:{'izvestaji':{'datum':datum,'vreme':vreme,'ime_lekara':ime_lekara,
    'spec_lekara':spec_lekara,'razlog':razlog,'dijagnoza':dijagnoza,'terapija':terapija,'naredni_datum':naredni,'korisnicko_ime':korisnicko_ime}}})

    }

    zabraniNoviIzvestaj = (req:express.Request,res:express.Response)=>{
        let naziv = req.body.naziv
        let datum = req.body.datum
        let vreme = req.body.vreme
        let kor_ime = req.body.kor_ime

    
        pacijent.collection.findOneAndUpdate({'korisnicko_ime':kor_ime},
        {$set:{
            'zakazani_pregledi.$[el].status':true
        }},
        {
            arrayFilters : [{'el.naziv':naziv,'el.datum':datum,'el.vreme':vreme}]
        })
    }

}