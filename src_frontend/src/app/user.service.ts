import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Zakazan_pregled } from './models/zakazan_pregled';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  uri = "http://localhost:4000/user"

  


  login(korisnicko_ime:string,lozinka:string,tip:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka,
      tip:tip
    }
    return this.http.post(`${this.uri}/login`,data)

  }
  registruj(ime:string,prezime:string,korisnicko_ime:string,lozinka:string,adresa:string,kontakt:string,imejl:string,slika:string){
      let data={
        ime:ime,
        prezime:prezime,
        korisnicko_ime:korisnicko_ime,
        lozinka:lozinka,
        adresa:adresa,
        kontakt:kontakt,
        imejl:imejl,
        slika:slika
        
      }
      return this.http.post(`${this.uri}/registruj`,data)
    }
  dohvatiZahtev(korisnicko_ime:string){
    let data ={
      korisnicko_ime:korisnicko_ime
    }

    

    return this.http.post(`${this.uri}/dohvatiZahtev`,data)
  }
  dohvatiKorisnika(korisnicko_ime:string,old_pass:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      old_pass:old_pass
    }   

    return this.http.post(`${this.uri}/dohvatiKorisnika`,data)
  }
  azurirajSifru(korisnicko_ime:string,new_pass:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      new_pass:new_pass
    }
    return this.http.post(`${this.uri}/azurirajSifru`,data)
  }
  dohvatiSveLekare(){
    let data;

    return this.http.post(`${this.uri}/dohvatiSveLekare`,data)
  }
  pronadjiLekare(ime:string,prezime:string,spec:string,ogranak:string){
    let data = {
      ime:ime,
      prezime:prezime,
      spec:spec,
      ogranak:ogranak
    };

    return this.http.post(`${this.uri}/pronadjiLekare`,data)
  }

  dohvatiPacijenta(korisnicko_ime:string){
    let data = {
      korisnicko_ime:korisnicko_ime
    }
    return this.http.post(`${this.uri}/dohvatiPacijenta`,data)

  }
  azurirajPodatke(korisnicko_ime:string,ime:string,prezime:string,kontakt:string,adresa:string,imejl:string,slika:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      ime:ime,
      prezime:prezime,
      kontakt:kontakt,
      adresa:adresa,
      imejl:imejl,
      slika:slika
    }

    return this.http.post(`${this.uri}/azurirajPodatke`,data)
  }

  dohvatiLekara(korisnicko_ime:string){
    let data = {
      korisnicko_ime:korisnicko_ime
    }

    return this.http.post(`${this.uri}/dohvatiLekara`,data)
  }
  azurirajPodatkeLekar(korisnicko_ime:string,ime:string,prezime:string,kontakt:string,adresa:string,broj_licence:number,specijalizacija:string,slika:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      ime:ime,
      prezime:prezime,
      kontakt:kontakt,
      adresa:adresa,
      broj_licence:broj_licence,
      specijalizacija:specijalizacija,
      slika:slika
    }

    return this.http.post(`${this.uri}/azurirajPodatkeLekar`,data)
  }

  dodajPregled(korisnicko_ime:string,pregled:string,datum:Date,vreme:string,ime_lekara:string){
    let data = {
      korisnicko_ime:korisnicko_ime,
      pregled:pregled,
      datum:datum,
      vreme:vreme,
      ime_lekara:ime_lekara
    }

   

    return this.http.post(`${this.uri}/dodajPregled`,data)
  }
  
  otkaziPregled(korisnicko_ime:string,pregled:Zakazan_pregled){
    let data = {
      naziv:pregled.naziv,
      lek:pregled.lekar,
      datum:pregled.datum,
      vreme:pregled.vreme,
      korisnicko_ime:korisnicko_ime
    }

    return this.http.post(`${this.uri}/otkaziPregled`,data)
  }
  dohvatiSvePreglede(spec:string){
    let data = {
      spec:spec
    }

    return this.http.post(`${this.uri}/dohvatiSvePreglede`,data)
  }

  dodajUslugu(kor_ime:string,naziv:string,trajanje:number,cena:number){
      let data = {
        kor_ime:kor_ime,
        naziv:naziv,
        trajanje:trajanje,
        cena:cena
      }

      return this.http.post(`${this.uri}/dodajUslugu`,data)
  }
  izbaciUslugu(kor_ime:string,naziv:string){
    let data = {
      kor_ime:kor_ime,
      naziv:naziv
    }
    return this.http.post(`${this.uri}/izbaciUslugu`,data)
  }

  dohvatiSvePacijente(){
    let data
    return this.http.post(`${this.uri}/dohvatiSvePacijente`,data)
  }

  loginMenadzer(kor_ime:string,lozinka:string){
    
    let data = {
      kor_ime:kor_ime,
      lozinka:lozinka
    }
    
    return this.http.post(`${this.uri}/loginMenadzer`,data)
  }
  obrisiLekara(kor_ime:string){
    let data = {
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/obrisiLekara`,data)
  }

  obrisiPacijenta(kor_ime:string){
    let data = {
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/obrisiPacijenta`,data)
  }
  
  dohvatiSveZahteve(){
    let data
    

    return this.http.post(`${this.uri}/dohvatiSveZahteve`,data)
  }
  prihvatiZahtev(ime:string,prezime:string,imejl:string,kontakt:string,korisnicko_ime:string,lozinka:string,slika:string,adresa:string){
    let data = {
      ime:ime,
      prezime:prezime,
      imejl:imejl,
      kontakt:kontakt,
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka,
      slika:slika,
      adresa:adresa
    }
    

    return this.http.post(`${this.uri}/prihvatiZahtev`,data)
  }

  odbijZahtev(kor_ime:string){
    let data = {
      kor_ime:kor_ime
    }

    return this.http.post(`${this.uri}/odbijZahtev`,data)
  }

  dodajLekara(ime:string,prezime:string,korisnicko_ime:string,lozinka:string,adresa:string,kontakt:number,imejl:string,slika:string,
    specijalizacija:string,ogranak:string,broj_licence:number){
      let data = {
        ime:ime,
        prezime:prezime,
        imejl:imejl,
        kontakt:kontakt,
        korisnicko_ime:korisnicko_ime,
        lozinka:lozinka,
        slika:slika,
        adresa:adresa,
        specijalizacija:specijalizacija,
        ogranak:ogranak,
        broj_licence:broj_licence
      }


      return this.http.post(`${this.uri}/dodajLekara`,data)
    }

    dodajZahtevZaPregled(naziv:string,cena:number,specijalizacija:string,trajanje:number){
      let data = {
        naziv:naziv,
        cena:cena,
        specijalizacija:specijalizacija,
        trajanje:trajanje
      }


      return this.http.post(`${this.uri}/dodajZahtevZaPregled`,data)

    }

    dohvatiSveZahteveZaPreglede(){
      let data 

      return this.http.post(`${this.uri}/dohvatiSveZahteveZaPreglede`,data)
    }

    odbijZahtevZaPregled(naziv:string){
      let data = {
        naziv:naziv
      }
  
      return this.http.post(`${this.uri}/odbijZahtevZaPregled`,data)
    }
    prihvatiZahtevZaPregled(naziv:string,spec:string,cena:number,trajanje:number){
      let data = {
        naziv:naziv,
        spec:spec,
        cena:cena,
        trajanje:trajanje
      }
  
      return this.http.post(`${this.uri}/prihvatiZahtevZaPregled`,data)
    }

    dohvatiBasSvePreglede(){
      let data;

      return this.http.post(`${this.uri}/dohvatiBasSvePreglede`,data)
    }
    dohvatiPregled(naziv:string){
      let data = {
        naziv:naziv
      }

      return this.http.post(`${this.uri}/dohvatiPregled`,data)
    }
    azurirajPregled(naziv:string,spec:string,cena:number,trajanje:number,ime:string){
      //azuriranje pregleda u bazi pregledi

      let data = {
        naziv:naziv,
        spec:spec,
        cena:cena,
        trajanje:trajanje,
        ime:ime
      }
      return this.http.post(`${this.uri}/azurirajPregled`,data)
    }

    obrisiPregled(naziv:string,spec:string){
      let data = {
        naziv:naziv,
        spec:spec
      }
      return this.http.post(`${this.uri}/obrisiPregled`,data)
    }
    dohvatiMenadzera(kor_ime:string){
      let data = {
        kor_ime:kor_ime
      }

      return this.http.post(`${this.uri}/dohvatiMenadzera`,data)
    }

    promenaLozinkeLekar(naziv:string,pass:string){
      let data ={
        naziv:naziv,
        pass:pass
      }

      return this.http.post(`${this.uri}/promenaLozinkeLekar`,data)
    }
    azurirajSifruLekar(naziv:string,pass:string){
      let data ={
        naziv:naziv,
        pass:pass
      }

      return this.http.post(`${this.uri}/azurirajSifruLekar`,data)
    }
    promenaLozinkeMenadzer(naziv:string,pass:string){
      let data ={
        naziv:naziv,
        pass:pass
      }

      return this.http.post(`${this.uri}/promenaLozinkeMenadzer`,data)
    }
    azurirajSifruMenadzer(naziv:string,pass:string){
      let data ={
        naziv:naziv,
        pass:pass
      }

      return this.http.post(`${this.uri}/azurirajSifruMenadzer`,data)
    }
    dohvatiSveSpecijalizacije(){
      let data
      return this.http.post(`${this.uri}/dohvatiSveSpecijalizacije`,data)
    }

    dodajPregledPoSpec(naziv:string,spec:string,cena:number,trajanje:number){
      let data = {
        naziv:naziv,
        spec:spec,
        cena:cena,
        trajanje:trajanje
      }
      return this.http.post(`${this.uri}/dodajPregledPoSpec`,data)
    }

    dodajSpec(naziv:string){
      let data = {
        naziv:naziv
      }
      return this.http.post(`${this.uri}/dodajSpec`,data)
    }
    dodajIzvestaj(pacijent:string,datum:Date,vreme:string,ime_lekara:string,spec_lekara:string,razlog:string
      ,dijagnoza:string,terapija:string,naredni:Date,korisnicko_ime:string){
        let data = {
          pacijent:pacijent,
          datum:datum,
          vreme:vreme,
          ime_lekara:ime_lekara,
          spec_lekara:spec_lekara,
          razlog:razlog,
          dijagnoza:dijagnoza,
          terapija:terapija,
          naredni:naredni,
          korisnicko_ime:korisnicko_ime
        }
        return this.http.post(`${this.uri}/dodajIzvestaj`,data)
      }

      zabraniNoviIzvestaj(kor_ime:string,naziv:string,datum:string,vreme:string){
        let data = {
          kor_ime:kor_ime,
          naziv:naziv,
          datum:datum,
          vreme:vreme
        }
        return this.http.post(`${this.uri}/zabraniNoviIzvestaj`,data)
      }
  
}
