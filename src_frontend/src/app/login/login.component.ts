import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pacijent } from '../models/pacijent';
import { Lekar } from '../models/lekar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  korisnicko_ime:string = "";
  lozinka:string = "";
  error:string = "";
  tip:string = "";

  ngOnInit(): void {
    
  }

  login(){
    if(this.korisnicko_ime == "" || this.lozinka == "" || this.tip == ""){
      this.error = "Niste uneli sve podatke"
      return
    }

    this.error = ""
    if(this.tip == 'pacijent'){
      this.userService.login(this.korisnicko_ime,this.lozinka,this.tip).subscribe((p:Pacijent)=>{
        if(p){
          localStorage.setItem("ulogovan",p.korisnicko_ime)
          sessionStorage.setItem('tip',"pacijent")
          this.router.navigate(['pacijent'])
        }else{
          this.error = "Pogresni podaci"
          return
        }
      })
    }else if(this.tip == 'lekar'){
      this.userService.login(this.korisnicko_ime,this.lozinka,this.tip).subscribe((l:Lekar)=>{
        if(l){
          localStorage.setItem("ulogovan",l.korisnicko_ime)
          sessionStorage.setItem('tip',"lekar")
          this.router.navigate(['lekar'])
        }else{
          this.error = "Pogresni podaci"
          return
        }
      })
    }
  }
  skociNaRegistraciju(){
    this.router.navigate(['registracija'])
  }
}
