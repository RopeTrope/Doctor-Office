import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';
import { Pacijent } from '../models/pacijent';

@Component({
  selector: 'app-menadzer',
  templateUrl: './menadzer.component.html',
  styleUrls: ['./menadzer.component.css']
})
export class MenadzerComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}


  lekari:Lekar[] = []
  pacijenti:Pacijent[] = []

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiSveLekare().subscribe((l:Lekar[])=>{
      this.lekari = l;
      this.userService.dohvatiSvePacijente().subscribe((p:Pacijent[])=>{
        this.pacijenti = p
      })
    })
  }

  azurirajPacijenta(pacijent:Pacijent){
    localStorage.setItem('azuriraj',pacijent.korisnicko_ime);
    this.router.navigate(['azuriranjePacijenta'])
  }

  azurirajLekara(lekar:Lekar){
    localStorage.setItem('azuriraj',lekar.korisnicko_ime);
    this.router.navigate(['azuriranjeLekara'])
  }

  obrisiLekara(lekar:Lekar){
    this.userService.obrisiLekara(lekar.korisnicko_ime).subscribe()
    window.location.reload()
  }

  obrisiPacijenta(pacijent:Pacijent){
    this.userService.obrisiPacijenta(pacijent.korisnicko_ime).subscribe()
    window.location.reload()
  }
  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])

  }

}
