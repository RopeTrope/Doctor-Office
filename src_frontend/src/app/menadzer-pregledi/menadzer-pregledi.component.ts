import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ZahtevZaPregled } from '../models/zahtevZaPregled';
import { Pregled } from '../models/pregled';
import { Lekar } from '../models/lekar';
import { Specijalizacija } from '../models/specijalizacija';

@Component({
  selector: 'app-menadzer-pregledi',
  templateUrl: './menadzer-pregledi.component.html',
  styleUrls: ['./menadzer-pregledi.component.css']
})
export class MenadzerPreglediComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  zZaP:ZahtevZaPregled[]= []
  pregledi:Pregled[] = []
  lekari:Lekar[] = []
  lekariPoSpec:Lekar[] = []
  specijalizacije:Specijalizacija[] = []
  naziv:string = ""
  cena:number
  trajanje:  number

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiSveZahteveZaPreglede().subscribe((z:ZahtevZaPregled[])=>{
      this.zZaP = z;
      this.userService.dohvatiBasSvePreglede().subscribe((p:Pregled[])=>{
        this.pregledi = p
        this.userService.dohvatiSveSpecijalizacije().subscribe((s:Specijalizacija[])=>{
          this.specijalizacije = s
        })
      })
    })
  }

  prihvati(zahtev:ZahtevZaPregled){
    this.userService.prihvatiZahtevZaPregled(zahtev.naziv,zahtev.specijalizacija,zahtev.cena,zahtev.trajanje).subscribe()
    window.location.reload()
  }
  odbij(zahtev:ZahtevZaPregled){
    this.userService.odbijZahtevZaPregled(zahtev.naziv).subscribe()
    window.location.reload()
  }

  azuriraj(pregled:Pregled){
    localStorage.setItem('pregled',pregled.naziv)
    this.router.navigate(['azuriraj_pregled'])
  }

  obrisi(pregled:Pregled){
    this.userService.obrisiPregled(pregled.naziv,pregled.specijalizacija).subscribe()
    //window.location.reload()
    this.userService.dohvatiSveLekare().subscribe((l:Lekar[])=>{
      this.lekari = l
        this.lekari.forEach(element => {
          if(element.specijalizacija == pregled.specijalizacija){
            this.lekariPoSpec.push(element)
          }
        });

        this.lekariPoSpec.forEach(element => {
          this.userService.izbaciUslugu(element.korisnicko_ime,pregled.naziv).subscribe()
        });

    })
  }

  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }
  greska:string = ""
  dodajPregled(spec:Specijalizacija){
    if(this.cena == null || this.trajanje == null || this.naziv == ""){
      this.greska = "Niste uneli sve podatke"
      return
    }
    if(this.cena < 0 || this.trajanje <0){
      this.greska = "Cena i trajanje moraju biti pozitivne vrednosti"
      return
    }
    this.userService.dodajPregledPoSpec(this.naziv,spec.naziv,this.cena,this.trajanje).subscribe()
    this.naziv = ""
    this.cena = null
    this.trajanje = null 
    window.location.reload()
    alert("Pregled uspesno dodat!")
  }

  specijal:string = ""

  dodajSpec(){
    this.userService.dodajSpec(this.specijal).subscribe()
    window.location.reload()
    alert("Specijalizacija uspesno dodata!")
  }

}
