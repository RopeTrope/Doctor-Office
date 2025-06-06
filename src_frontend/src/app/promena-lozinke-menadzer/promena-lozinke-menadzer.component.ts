import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../user.service';
import { Menadzer } from '../models/menadzer';

@Component({
  selector: 'app-promena-lozinke-menadzer',
  templateUrl: './promena-lozinke-menadzer.component.html',
  styleUrls: ['./promena-lozinke-menadzer.component.css']
})
export class PromenaLozinkeMenadzerComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
  }

  
  old_pass:string = "";
  new_pass:string = "";
  conf_pass:string = "";
  korisnik:string = "";
  error:string = ""
  mala_slova:string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  velika_slova:string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  special_chars:string[] = [
      '!', '@', '#', '$', '%', '^', '&', '*',
      '-', '_', '=', '+', ';', ':', ',', '.', '<', '>', '?', '/'
  ]
  brojevi:string[] = [
      '1','2','3','4','5','6','7','8','9','0'
  ]

  promeniLozinku(){
    this.korisnik = localStorage.getItem("ulogovan");
    let mala = false;
    let velika = false;
    let spec = false;
    let br = false;
    let prvo = false;
    if(this.old_pass == "" || this.new_pass == "" || this.conf_pass == ""){
      this.error = "Nisu uneti svi podaci"
      return;
    }
    if(this.new_pass.length<8 || this.new_pass.length >14){
        this.error = "Nova lozinka nije dovoljno velike duzine"
        return;
    }
    if(this.old_pass == this.new_pass){
      this.error = "Stara lozinka je ista kao i nova";
      return;
    }
    if(this.new_pass != this.conf_pass){
      this.error = "Nova lozinka nije ista kao i Potvrdna lozinka"
      return;
    }
    let index = 0
    let last = this.new_pass.length-1
    while(index < last){
      if(this.new_pass[index] == this.new_pass[index+1]){
        this.error = "Ne smeju da budu ista dva susedna karaktera"
        return;
      }
      index++;
    }
    this.mala_slova.forEach(element => {
      if(this.new_pass.includes(element)){
        mala = true;
      }
    });
    this.velika_slova.forEach(element => {
      if(this.new_pass.includes(element)){
        velika = true;
      }
    });
    this.special_chars.forEach(element => {
      if(this.new_pass.includes(element)){
        spec = true;
      }
    });
    this.brojevi.forEach(element => {
      if(this.new_pass.includes(element)){
        br = true;
      }
    });
    if(this.mala_slova.includes(this.new_pass[0]) || this.velika_slova.includes(this.new_pass[0])){
      prvo = true;
    }
    if(br && spec && velika && mala && prvo){
      this.error = ""
      this.userService.promenaLozinkeMenadzer(this.korisnik,this.old_pass).subscribe((m:Menadzer)=>{
        if(m){
          this.userService.azurirajSifruMenadzer(this.korisnik,this.new_pass).subscribe();
          localStorage.removeItem('ulogovan')
          this.router.navigate(['menadzer_logovanje'])
        }else{
          this.error = "Pogresna stara lozinka"
          return;
        }
      })
    }else{
      this.error = "Uslov za novu lozinku nije ispunjen"
      return;
    }
}

otkazi(){
  this.old_pass  = "";
  this.new_pass = "";
  this.conf_pass = "";
  this.korisnik = "";
  this.error =  ""
  this.router.navigate(['menadzer'])
}
}
