import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Zahtev } from '../models/zahtev';

@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  zahtevi:Zahtev[] = []

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
    //sve zahteve koji su neobradjeni
    this.userService.dohvatiSveZahteve().subscribe((z:Zahtev[])=>{
      this.zahtevi = z
    })
  }

  prihvati(zahtev:Zahtev){
    this.userService.prihvatiZahtev(zahtev.ime,zahtev.prezime,zahtev.imejl,zahtev.kontakt,zahtev.korisnicko_ime,
      zahtev.lozinka,zahtev.slika,zahtev.adresa).subscribe()

      window.location.reload()
  }

  odbij(zahtev:Zahtev){
    this.userService.odbijZahtev(zahtev.korisnicko_ime).subscribe()

    window.location.reload()
  }
  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

}
