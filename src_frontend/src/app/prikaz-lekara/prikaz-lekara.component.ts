import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Lekar } from '../models/lekar';

@Component({
  selector: 'app-prikaz-lekara',
  templateUrl: './prikaz-lekara.component.html',
  styleUrls: ['./prikaz-lekara.component.css']
})
export class PrikazLekaraComponent implements OnInit{
  
  constructor(private router:Router,private userService:UserService){}
    lekari:Lekar[]
    ime:string = ""
    prezime:string = ""
    spec:string = ""
    sortirajPo:string = ""
    tip:string = ""
    ogranak:string = ''
  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'pacijent'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiSveLekare().subscribe((l:Lekar[])=>{
      this.lekari = l
    })
  }

  pronadji(){
    this.userService.pronadjiLekare(this.ime,this.prezime,this.spec,this.ogranak).subscribe((l:Lekar[])=>{
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
      
    }
    else if(this.sortirajPo == "ogranak"){
      if(this.tip == "rastuce"){
        this.lekari.sort((a,b)=>
          a.ogranak > b.ogranak ? 1 : -1
        )
        return;
      }else{
        this.lekari.sort((a,b)=>
          a.ogranak > b.ogranak ? -1 : 1
        )
        return;
      }
  }else{
    return;
  }
  }
  profilLekara(l:Lekar){
    localStorage.setItem("lekar",l.korisnicko_ime)
    this.router.navigate(['profil_lekara'])
  }

  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

}
