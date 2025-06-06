import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Pacijent } from '../models/pacijent';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-azuriranje-pacijenta-menadzer',
  templateUrl: './azuriranje-pacijenta-menadzer.component.html',
  styleUrls: ['./azuriranje-pacijenta-menadzer.component.css']
})
export class AzuriranjePacijentaMenadzerComponent implements OnInit {
  constructor(private router:Router,private userService:UserService){}

  slika:string = ""
  pacijent:Pacijent;
  base64Output:string = ""
  ime:string = ""
  prezime:string = ""
  adresa:string = ""
  kontakt:string = ""
  imejl:string = ""


  ngOnInit(): void {
    if(sessionStorage.getItem('tip') != 'menadzer'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPacijenta(localStorage.getItem('azuriraj')).subscribe((p:Pacijent)=>{
      this.pacijent = p;
    })
  }


  onFileSelected(event) {

    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
      this.slika = 'data:image/jpeg;base64,' + this.base64Output;
      
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }


  azurirajPodatke(){
    if(this.ime == ""){
      this.ime = this.pacijent.ime
    }
    if(this.prezime == ""){
      this.prezime = this.pacijent.prezime
    }
    if(this.adresa == ""){
      this.adresa = this.pacijent.adresa
    }
    if(this.kontakt == ""){
      this.kontakt = this.pacijent.kontakt
    }
    if(this.imejl == ""){
      this.imejl = this.pacijent.imejl
    }
    if(this.slika == ""){
      this.slika = this.pacijent.slika
    }
    if(this.kontakt[0] != '0' || this.kontakt[1] !='6' || this.kontakt.length != 10 ){
      return
    }
    this.userService.azurirajPodatke(this.pacijent.korisnicko_ime,this.ime,this.prezime,this.kontakt,
      this.adresa,this.imejl,this.slika).subscribe()
      this.ime = ""
      this.prezime = ""
      this.kontakt = "";
      this.imejl = ""
      this.slika = ""
      this.adresa = ""
      localStorage.removeItem('azuriraj')
      this.router.navigate(['menadzer'])
  }


  otkazi(){
    this.router.navigate(['menadzer'])
  }
}
