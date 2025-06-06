import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pregled } from '../models/pregled';

@Component({
  selector: 'app-azuriraj-pregled',
  templateUrl: './azuriraj-pregled.component.html',
  styleUrls: ['./azuriraj-pregled.component.css']
})
export class AzurirajPregledComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  naziv:string = ""
  cena:number
  trajanje:number
  p:string
  pregled:Pregled
  error:string = ""

  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPregled(localStorage.getItem('pregled')).subscribe((pre:Pregled)=>{
      this.pregled = pre
    })
  } 

  azuriraj(){
    if(this.naziv == "" ||  this.cena==null ){
      this.error = "Niste uneli sve podatke"
      return
    }
    if(this.cena < 0 || this.trajanje < 0){
      this.error = "Cena i trajanje su pozitivne vrednosti"
      return
    }
    if(this.trajanje == null){
      this.trajanje = 30
    }
    this.error = ""
    this.userService.azurirajPregled(this.naziv,this.pregled.specijalizacija,this.cena,this.trajanje,this.pregled.naziv).subscribe()
    this.naziv = ""
    this.cena = null
    this.trajanje = null
    localStorage.removeItem("pregled")
    this.router.navigate(['menadzer_pregledi'])
    

  }

}
