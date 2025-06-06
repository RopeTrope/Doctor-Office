import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pacijent } from '../models/pacijent';
import { Lekar } from '../models/lekar';
import { Zakazan_pregled } from '../models/zakazan_pregled';

@Component({
  selector: 'app-lekar-pregledi',
  templateUrl: './lekar-pregledi.component.html',
  styleUrls: ['./lekar-pregledi.component.css']
})
export class LekarPreglediComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  pacijenti:Pacijent[] = []
  lekar:Lekar
  pregledi:Zakazan_pregled[] = []
  slicedArray:Zakazan_pregled[] = []
  pomocniNiz:Zakazan_pregled[] = []

  ngOnInit(): void {
    if(sessionStorage.getItem('tip')!="lekar"){
      this.router.navigate([''])
    }
    this.userService.dohvatiSvePacijente().subscribe((p:Pacijent[])=>{
      this.pacijenti = p;
      this.userService.dohvatiLekara(localStorage.getItem("ulogovan")).subscribe((l:Lekar)=>{
        this.lekar = l
        this.pacijenti.forEach(element => {
          element.zakazani_pregledi.forEach(z => {
            if(z.lekar == this.lekar.korisnicko_ime && z.status!=true){
              let pregled = new Zakazan_pregled()
              pregled.naziv = z.naziv
              pregled.lekar = z.lekar
              pregled.ogranak = this.lekar.ogranak
              pregled.vreme = z.vreme
              pregled.datum = z.datum
              pregled.pacijent = element.korisnicko_ime
              this.pregledi.push(pregled)
            }
          });
        });
          this.pregledi.sort((a,b)=>{
            let pom = new Date(a.datum)
            pom.setHours(parseInt(a.vreme[0] + a.vreme[1]))
            pom.setMinutes(parseInt(a.vreme[3]+a.vreme[4]))
            let pom2 = new Date(b.datum)
            pom2.setHours(parseInt(b.vreme[0] + b.vreme[1]))
            pom2.setMinutes(parseInt(b.vreme[3]+b.vreme[4]))
            return (pom > pom2 ? 1 : -1)
          })
          this.pregledi.forEach(element => {
             let pom = new Date()
             console.log(pom)
             let pom2 = new Date(element.datum)
            pom2.setHours(parseInt(element.vreme[0]+element.vreme[1]))
            pom2.setMinutes(parseInt(element.vreme[3]+element.vreme[4]))
            console.log(pom2)
            console.log(pom)
            if(pom2 > pom){
              this.slicedArray.push(element)
            }
          });
          this.slicedArray.splice(3,this.slicedArray.length)
       

      })
    })
  }

  odjaviSe(){
    localStorage.removeItem("ulogovan")
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

  odaberi(pregled:Zakazan_pregled){
    localStorage.setItem('pacijent',pregled.pacijent)
    
    this.router.navigate(['karton_pacijenta'])
  }

}
