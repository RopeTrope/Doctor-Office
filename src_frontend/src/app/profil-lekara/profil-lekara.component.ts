import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';
import { Zakazan_pregled } from '../models/zakazan_pregled';
import { Pregled } from '../models/pregled';
import { Pacijent } from '../models/pacijent';

@Component({
  selector: 'app-profil-lekara',
  templateUrl: './profil-lekara.component.html',
  styleUrls: ['./profil-lekara.component.css']
})
export class ProfilLekaraComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  lekar:Lekar
  pregled:string = "";
  datum:Date;
  vreme:string = ""
  pregledi:Pregled[] = []
  pacijenti:Pacijent[] = []
  lekareviPregledi:Zakazan_pregled[] = []

  ngOnInit(): void { 
    if(sessionStorage.getItem('tip') != 'pacijent'){
      this.router.navigate([''])
    }  
    this.userService.dohvatiLekara(localStorage.getItem('lekar')).subscribe((l:Lekar)=>{
      this.lekar = l
      this.pregledi = this.lekar.pregledi
    })
    
  }
  greska:string = ""
  zakazi(){
    this.greska = ""
    if(this.pregled == "" || this.datum == null || this.vreme == ""){
      this.greska = "Sva polja moraju biti popunjena"
      return
    }
    
    this.userService.dohvatiSvePacijente().subscribe((p:Pacijent[])=>{
      this.pacijenti = p;

      this.pacijenti.forEach(element => {
        element.zakazani_pregledi.forEach(zp => {
          if(zp.lekar == this.lekar.korisnicko_ime){
            this.lekareviPregledi.push(zp)
          }
        });
      });
    let flag = false
      for(let i = 0;i<this.lekareviPregledi.length;i++){
      let s //pocetno odabrano vreme
      s = new Date(this.datum)
      let k = new Date(this.lekareviPregledi[i].datum)
      let a = this.vreme.split(':')
      s.setHours(a[0])
      s.setMinutes(a[1])
      console.log('Ovo je s:' + s)
      if(s.getFullYear() == k.getFullYear() && s.getMonth() == k.getMonth() && s.getDate() == k.getDate()){
        let preg 
        let odabranPregled
        this.pregledi.forEach(element => {
          if(element.naziv == this.lekareviPregledi[i].naziv){
            preg = element
          }
          if(this.pregled == element.naziv){
            odabranPregled = element
          }
        });
        
          let b = this.lekareviPregledi[i].vreme.split(':')
          k.setHours(parseInt(b[0]))
          k.setMinutes(parseInt(b[1]))
          let pom = new Date(k)
          let pom2 = new Date(s)
          pom.setMinutes(preg.trajanje + k.getMinutes())
          pom2.setMinutes(odabranPregled.trajanje + s.getMinutes())
          //s-odabrano pocetno, k-neko pocetno, pom-neko krajnje, pom2-odabrano krajnje
          if(((s > k) && (s < pom))  || ((pom > pom2) && (pom2>k)) || ((s<k) && (pom < pom2)) ){
            this.greska = "Lekar je zauzet u ovom terminu. Molimo pokusajte drugi termin"
            return
          }
    }
    };
    if(this.greska != ""){
      console.log("MARS")
      return;
    }
      this.greska = ""
      this.userService.dodajPregled(localStorage.getItem("ulogovan"),this.pregled,this.datum,this.vreme,this.lekar.korisnicko_ime).subscribe()
      this.vreme = null
      this.datum = new Date()
      this.pregled = ""
      window.location.reload()
      alert("Pregled uspesno zakazan!")
    
  })
  }


}
