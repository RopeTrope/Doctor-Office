import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';
import { Observable, ReplaySubject } from 'rxjs';

import { Pregled } from '../models/pregled';
import { Specijalizacija } from '../models/specijalizacija';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
export class LekarComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}


  lekar:Lekar;
  base64Output:string = "";
  ime:string = "";
  prezime:string = "";
  kontakt:string = "";
  broj_licence:number;
  spec:string = "";
  adresa:string = "";
  slika:string = ""
  pregledi:Pregled[]
  specijalizacije:Specijalizacija[] = []


  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'lekar'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiLekara(localStorage.getItem("ulogovan")).subscribe((l:Lekar)=>{
      this.lekar = l;
      this.userService.dohvatiSvePreglede(this.lekar.specijalizacija).subscribe((p:Pregled[])=>{
        this.pregledi = p;

        this.pregledi.forEach(element => {
          this.lekar.pregledi.forEach(u=>{
            if(u.naziv == element.naziv){
              element.status = true;
            }
          })
          this.userService.dohvatiSveSpecijalizacije().subscribe((s:Specijalizacija[])=>{
            this.specijalizacije = s
          })
        });
      })
    })
  
   
    
  }

  azurirajPodatke(){
    if(this.ime == ""){
      this.ime = this.lekar.ime
    }
    if(this.prezime == ""){
      this.prezime = this.lekar.prezime
    }
    if(this.adresa == ""){
      this.adresa = this.lekar.adresa
    }
    if(this.kontakt == ""){
      this.kontakt = this.lekar.kontakt
    }
    if(this.broj_licence == null){
      this.broj_licence = this.lekar.broj_licence
    }
    if(this.spec == ""){
      this.spec = this.lekar.specijalizacija
    }
    if(this.slika == ""){
      this.slika = this.lekar.slika
    }
    if(this.kontakt[0] != '0' || this.kontakt[1] !='6' || this.kontakt.length != 10 ){
      return
    }
    this.userService.azurirajPodatkeLekar(this.lekar.korisnicko_ime,this.ime,this.prezime,this.kontakt,this.adresa,this.broj_licence,
      this.spec,this.slika).subscribe()
      this.ime = ""
      this.prezime = ""
      this.kontakt = "";
      this.broj_licence = 0;
      this.slika = ""
      this.adresa = ""
      this.spec = ""
      window.location.reload()
  }

  onFileSelected(event) {

    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
      this.slika = 'data:image/jpeg;base64,' + this.base64Output;
      
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  dodaj(preg:Pregled){
    this.userService.dodajUslugu(this.lekar.korisnicko_ime,preg.naziv,preg.trajanje,preg.cena).subscribe()
    window.location.reload()
  }
  izbaci(preg:Pregled){
    this.userService.izbaciUslugu(this.lekar.korisnicko_ime,preg.naziv).subscribe()
    window.location.reload()
  }

  odjaviSe(){
    localStorage.removeItem("ulogovan")
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }
  promena(){
    this.router.navigate(['promena_lozinke_lekar'])
  }

}
