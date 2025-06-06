import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';

@Component({
  selector: 'app-razno',
  templateUrl: './razno.component.html',
  styleUrls: ['./razno.component.css']
})
export class RaznoComponent implements OnInit{
  constructor(private router:Router,private userService:UserService){}

  naziv:string = ""
  cena:number;
  trajanje:number;
  error:string = ""
  lekar:Lekar
  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'lekar'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiLekara(localStorage.getItem('ulogovan')).subscribe((l:Lekar)=>{
      this.lekar = l
    })
  }

  dodaj(){
    if(this.naziv == "" || this.cena == null ||  this.trajanje == null){
      this.error = "Niste uneli sve podatke"
      return
    }
    this.error = ""
    this.userService.dodajZahtevZaPregled(this.naziv,this.cena,this.lekar.specijalizacija,this.trajanje).subscribe()
    window.location.reload()
    alert("Zahtev uspesno poslat!")
  }
  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

}
