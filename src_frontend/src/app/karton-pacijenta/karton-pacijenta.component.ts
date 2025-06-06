import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pacijent } from '../models/pacijent';
import { Izvestaj } from '../models/izvestaj';
import { Zakazan_pregled } from '../models/zakazan_pregled';

@Component({
  selector: 'app-karton-pacijenta',
  templateUrl: './karton-pacijenta.component.html',
  styleUrls: ['./karton-pacijenta.component.css']
})
export class KartonPacijentaComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  pacijent:Pacijent
  izvestaji:Izvestaj[] = []
  pregledi:Zakazan_pregled[] = []
  prethodni_pregledi:Zakazan_pregled[] = []

  nazad(){
    this.router.navigate(['lekar_pregledi'])
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'lekar'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPacijenta(localStorage.getItem('pacijent')).subscribe((p:Pacijent)=>{
      this.pacijent = p
      this.pregledi = this.pacijent.zakazani_pregledi
      this.pacijent.izvestaji.forEach(element => {
        if(element.korisnicko_ime == localStorage.getItem('ulogovan')){
          this.izvestaji.push(element)
        }
      });
      this.pregledi.forEach(el => {
        if(new Date(el.datum) < new Date() &&  el.lekar == localStorage.getItem('ulogovan')){
               this.prethodni_pregledi.push(el)
        }
      });
    })
  }

  dodajIzvestaj(zp:Zakazan_pregled){
    
    localStorage.setItem('naziv',zp.naziv)
    localStorage.setItem('datum',zp.datum.toString())
    localStorage.setItem('vreme',zp.vreme.toString())
    this.router.navigate(['dodaj_izvestaj'])
  }

}
