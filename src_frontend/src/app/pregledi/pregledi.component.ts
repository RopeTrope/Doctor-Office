import { Component, OnInit } from '@angular/core';
import { Pacijent } from '../models/pacijent';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pregled } from '../models/pregled';
import { Zakazan_pregled } from '../models/zakazan_pregled';
import { Lekar } from '../models/lekar';
import { Izvestaj } from '../models/izvestaj';

@Component({
  selector: 'app-pregledi',
  templateUrl: './pregledi.component.html',
  styleUrls: ['./pregledi.component.css']
})
export class PreglediComponent implements OnInit{
  constructor(private router:Router,private userService:UserService){}

  pacijent:Pacijent
  pregledi:Zakazan_pregled[] = []
  kont:Date
  izvestaji:Izvestaj[] = []
  lekari:Lekar[] =[]

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'pacijent'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPacijenta(localStorage.getItem("ulogovan")).subscribe((p:Pacijent)=>{
      this.userService.dohvatiSveLekare().subscribe((l:Lekar[])=>{
        this.lekari = l
      
      this.pacijent = p;
      this.izvestaji = p.izvestaji
      this.izvestaji.sort((a,b)=>{
        let pom1 = new Date(a.datum)
        let pom2 = new Date(b.datum)
        pom1.setHours(parseInt(a.vreme[0]+a.vreme[1]))
        pom1.setMinutes(parseInt(a.vreme[3]+a.vreme[4]))
        pom2.setHours(parseInt(b.vreme[0]+b.vreme[1]))
        pom2.setMinutes(parseInt(b.vreme[3]+b.vreme[4]))
        return pom1 < pom2 ? 1:-1
      })
      this.pacijent.zakazani_pregledi.forEach(element => {
        let d = new Date(element.datum)
        let doktor;
        this.lekari.forEach(lek => {
          if(element.lekar == lek.korisnicko_ime){
            doktor = lek
          }
        });
        d.setHours(parseInt(element.vreme[0] + element.vreme[1]))
        d.setMinutes(parseInt(element.vreme[3] + element.vreme[4]))
        element.ogranak = doktor.ogranak
        if(d > new Date()){
          this.pregledi.push(element)
        }
      });
      this.pregledi.sort((a,b)=>{
        let pom1 = new Date(a.datum)
        let pom2 = new Date(b.datum)
        pom1.setHours(parseInt(a.vreme[0]+a.vreme[1]))
        pom1.setMinutes(parseInt(a.vreme[3]+a.vreme[4]))
        pom2.setHours(parseInt(b.vreme[0]+b.vreme[1]))
        pom2.setMinutes(parseInt(b.vreme[3]+b.vreme[4]))
        return pom1 > pom2 ? 1:-1
      })
    })
    })
 
  }

  otkazi(pregled:Zakazan_pregled){

    this.userService.otkaziPregled(this.pacijent.korisnicko_ime,pregled).subscribe()
    window.location.reload()
  }

  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

}
