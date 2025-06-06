import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable, ReplaySubject } from 'rxjs';
import { Pacijent } from '../models/pacijent';
import { Lekar } from '../models/lekar';
import { Menadzer } from '../models/menadzer';
import { Zahtev } from '../models/zahtev';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  ime:string = "";
  prezime:string = "";
  korisnicko_ime:string = "";
  lozinka:string = "";
  adresa:string = "";
  kontakt:string = "";
  imejl:string = "";
  tip:string = "";
  slika:string = "";
  pot_lozinke:string = ""
  mala_slova:string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  velika_slova:string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  special_chars:string[] = [
      '!', '@', '#', '$', '%', '^', '&', '*',
      '-', '_', '=', '+', ';', ':', ',', '.', '<', '>', '?', '/'
  ]
  brojevi:string[] = [
      '1','2','3','4','5','6','7','8','9','0'
  ]
  

  ngOnInit(): void {
    
  }

  error:string = ""
  registruj(){
    this.error = ""
  if(this.ime == "" || this.prezime == "" || this.korisnicko_ime == "" || this.kontakt == "" || this.lozinka == ""|| this.adresa == "" || this.imejl == "" || this.pot_lozinke == ""){
    this.error = "Morate uneti sve podatke";
    return;
  }
  this.brojTelefona(this.kontakt)
  if(this.error != ""){
    return
  }
  this.kreiranjeLozinke(this.lozinka,this.pot_lozinke)
  if(this.error != ""){
    return
}
  this.userService.dohvatiPacijenta(this.korisnicko_ime).subscribe((p:Pacijent)=>{
    if(p){
      this.error = "Korisnicko ime vec postoji u sistemu"
      return
    }
    this.userService.dohvatiLekara(this.korisnicko_ime).subscribe((l:Lekar)=>{
      if(l){
        this.error = "Korisnicko ime vec postoji u sistemu"
        return
      }
      this.userService.dohvatiMenadzera(this.korisnicko_ime).subscribe((m:Menadzer)=>{
        if(m){
          this.error = "Korisnicko ime vec postoji u sistemu"
          return
        }
        this.userService.dohvatiZahtev(this.korisnicko_ime).subscribe((z:Zahtev)=>{
          if(z?.status == "Odbijeno"){
            this.error = "Korisnicko ime vec postoji u sistemu"
            return
          }
          if(this.slika == ""){
            this.slika = "data:image/png;base64,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";
          }
            this.userService.registruj(this.ime,this.prezime,this.korisnicko_ime,this.lozinka,this.adresa,this.kontakt,this.imejl,this.slika).subscribe()
            this.ime = ""
            this.prezime = ""
            this.korisnicko_ime = ""
            this.lozinka = ""
            this.adresa = ""
            this.kontakt = ""
            this.imejl = ""
            this.router.navigate(['login'])
        })
      })
    })
  })
  
  }
  base64Output : string;
  b:string;

  onFileSelected(event) {
    this.error = ""
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
      this.slika = "data:image/jpeg;base64," + this.base64Output;
      
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  brojTelefona(broj:string){
    if(broj[0] != '0' || broj[1] !='6' || broj.length != 10 ){
      this.error = "Broj telefona nije ispravan"
      return
    }
  }

  kreiranjeLozinke(pass:string,conf_pass:string){
    let mala = false;
    let velika = false;
    let spec = false;
    let br = false;
    let prvo = false;
    if(pass.length<8 || pass.length >14){
      this.error = "Lozinka mora biti duzine izmedju 8-14 karaktera"
        return ;
    }
    if(pass != conf_pass){
      this.error = "Lozinka i potvrdna lozinka se razlikuju"
      return ;
    }
    let index = 0
    let last = pass.length-1
    while(index < last){
      if(pass[index] == pass[index+1]){ 
        this.error = "Dva susedna karaktera su jednaka"
        return;
      }
      index++;
    }
    this.mala_slova.forEach(element => {
      if(pass.includes(element)){
        mala = true;
      }
    });
    this.velika_slova.forEach(element => {
      if(pass.includes(element)){
        velika = true;
      }
    });
    this.special_chars.forEach(element => {
      if(pass.includes(element)){
        spec = true;
      }
    });
    this.brojevi.forEach(element => {
      if(pass.includes(element)){
        br = true;
      }
    });
    if(this.mala_slova.includes(pass[0]) || this.velika_slova.includes(pass[0])){
      prvo = true;
    }
    if(br && spec && velika && mala && prvo){
      this.error = ""
    }else{
      this.error = "Uslov za lozinku nije ispunjen!"
    }
    return
  }

}
