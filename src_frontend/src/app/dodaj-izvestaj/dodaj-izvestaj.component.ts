import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pacijent } from '../models/pacijent';
import { Lekar } from '../models/lekar';

@Component({
  selector: 'app-dodaj-izvestaj',
  templateUrl: './dodaj-izvestaj.component.html',
  styleUrls: ['./dodaj-izvestaj.component.css']
})
export class DodajIzvestajComponent implements OnInit{
  constructor(private router:Router,private userService:UserService){}
  pacijent:Pacijent
  datum:Date
  vreme:string
  razlog:string
  dijagnoza:string
  terapija:string
  naredni:Date
  lekar:Lekar

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'lekar'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPacijenta(localStorage.getItem('pacijent')).subscribe((p:Pacijent)=>{
      this.pacijent = p
      this.userService.dohvatiLekara(localStorage.getItem('ulogovan')).subscribe((l:Lekar)=>{
        this.lekar = l
      })
    })
  }

  dodajIzvestaj(){
    this.userService.dodajIzvestaj(this.pacijent.korisnicko_ime,this.datum,this.vreme,this.lekar.ime,
      this.lekar.specijalizacija,this.razlog,this.dijagnoza,this.terapija,this.naredni,this.lekar.korisnicko_ime).subscribe()
      let dat = localStorage.getItem('datum')
      let vre = localStorage.getItem('vreme')
      this.userService.zabraniNoviIzvestaj(this.pacijent.korisnicko_ime,localStorage.getItem('naziv'),localStorage.getItem('datum'),
      localStorage.getItem('vreme')).subscribe()
      this.router.navigate(['karton_pacijenta'])
      alert("Izvestaj uspesno dodat!")
  }
}
