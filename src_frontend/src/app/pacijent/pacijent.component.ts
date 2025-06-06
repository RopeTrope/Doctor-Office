import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Zahtev } from '../models/zahtev';
import { Pacijent } from '../models/pacijent';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.component.html',
  styleUrls: ['./pacijent.component.css']
})
export class PacijentComponent implements OnInit{
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
    if(sessionStorage.getItem('tip') != 'pacijent'){
      this.router.navigate([''])
    } 
    this.userService.dohvatiPacijenta(localStorage.getItem('ulogovan')).subscribe((p:Pacijent)=>{
      this.pacijent = p;
    })
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
      this.kontakt = null;
      this.imejl = ""
      this.slika = ""
      this.adresa = ""
      window.location.reload()
  }

  promena(){
    this.router.navigate(['promena_lozinke']);
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
  odjaviSe(){
    localStorage.removeItem('ulogovan')
    sessionStorage.removeItem('tip')
    this.router.navigate([''])
  }

  brojTelefona(broj:string){
    if(broj[0] != '0' || broj[1] !='6' || broj.length != 10 ){
      return
    }
  }

  

}
