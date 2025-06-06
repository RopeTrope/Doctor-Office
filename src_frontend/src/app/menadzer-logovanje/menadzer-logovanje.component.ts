import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Menadzer } from '../models/menadzer';

@Component({
  selector: 'app-menadzer-logovanje',
  templateUrl: './menadzer-logovanje.component.html',
  styleUrls: ['./menadzer-logovanje.component.css']
})
export class MenadzerLogovanjeComponent implements OnInit{
  constructor(private router:Router,private userService:UserService){}

  kor_ime:string;
  lozinka:string;
  error:string;
  menadzer:Menadzer


  ngOnInit(): void {
 
  }

login(){
  
    if(this.kor_ime == "" || this.lozinka == ""){
      this.error = "Niste uneli sve podatke"
      return
    }
    this.error = ""
    this.userService.loginMenadzer(this.kor_ime,this.lozinka).subscribe((m:Menadzer)=>{
    if(m){
      this.menadzer = m
      sessionStorage.setItem('tip',"menadzer")
      localStorage.setItem('ulogovan',this.menadzer.korisnicko_ime)
      this.router.navigate(['menadzer'])
    }else{
      this.error = "Pogresni podaci"
      return
    }
  })
}

}
