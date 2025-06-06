import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';


@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  lekari:Lekar[] = []
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  i =0
  ime:string = ""
  prezime:string = ""
  spec:string = ""
  tip:string = ""
  sortirajPo:string = ""
  pokazi = true
  constructor(private router:Router,private userService:UserService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('tip')!=null){
      this.pokazi= false
    }
    this.userService.dohvatiSveLekare().subscribe((l:Lekar[])=>{
      this.lekari = l;
    })
    this.slides[0] = {
      src: './assets/bolnica2.jpg',
    };
    this.slides[1] = {
      src: './assets/bolnica3.jpg',
    }
    this.slides[2] = {
      src: './assets/bolnica4.jpg',
    }
    this.slides[3] = {
      src: './assets/bolnica5.jpg',
    }
    this.slides[4] = {
      src: './assets/bolnica6.jpg',
    }
  
  }
  predjiNaLogin(){
    this.router.navigate(["login"])
  }
  predjiNaRegistraciju(){
    this.router.navigate(['registracija'])
  }

  pronadji(){
    this.userService.pronadjiLekare(this.ime,this.prezime,this.spec,"").subscribe((l:Lekar[])=>{
      this.lekari = l; 
    })
  }

  sortiraj(){
    if(this.sortirajPo == "" || this.tip == ""){
      return 
    }
    if(this.sortirajPo == "ime"){
      if(this.tip == "rastuce"){
        this.lekari.sort((a,b)=>
          a.ime > b.ime ? 1 : -1
        )
        return;
      }else{
        this.lekari.sort((a,b)=>
          a.ime > b.ime ? -1 : 1
        )
      }
    }else if(this.sortirajPo == "prezime"){
      if(this.tip == "rastuce"){
        this.lekari.sort((a,b)=>
          a.prezime > b.prezime ? 1 : -1
        )
        return;
      }else{
        this.lekari.sort((a,b)=>
          a.prezime > b.prezime ? -1 : 1
        )
        return;
      }
    }else if(this.sortirajPo == "specijalizacija"){
      if(this.tip == "rastuce"){
        this.lekari.sort((a,b)=>
          a.specijalizacija > b.specijalizacija ? 1 : -1
        )
        return;
      }else{
        this.lekari.sort((a,b)=>
          a.specijalizacija > b.specijalizacija ? -1 : 1
        )
        return;
      }
    }else{
      return;
    }


  }
  pocetna(){
    this.router.navigate([sessionStorage.getItem('tip')])
  }


}
