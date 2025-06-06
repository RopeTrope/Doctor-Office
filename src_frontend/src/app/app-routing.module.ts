import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { LoginComponent } from './login/login.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { LekarComponent } from './lekar/lekar.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { PrikazLekaraComponent } from './prikaz-lekara/prikaz-lekara.component';
import { ProfilLekaraComponent } from './profil-lekara/profil-lekara.component';
import { PreglediComponent } from './pregledi/pregledi.component';
import { LekarPreglediComponent } from './lekar-pregledi/lekar-pregledi.component';
import { MenadzerLogovanjeComponent } from './menadzer-logovanje/menadzer-logovanje.component';
import { MenadzerComponent } from './menadzer/menadzer.component';
import { AzuriranjePacijentaMenadzerComponent } from './azuriranje-pacijenta-menadzer/azuriranje-pacijenta-menadzer.component';
import { AzuriranjeLekaraMenadzerComponent } from './azuriranje-lekara-menadzer/azuriranje-lekara-menadzer.component';
import { ZahteviComponent } from './zahtevi/zahtevi.component';
import { DodavanjeLekaraComponent } from './dodavanje-lekara/dodavanje-lekara.component';
import { RaznoComponent } from './razno/razno.component';
import { MenadzerPreglediComponent } from './menadzer-pregledi/menadzer-pregledi.component';
import { AzurirajPregledComponent } from './azuriraj-pregled/azuriraj-pregled.component';
import { PromenaLozinkeLekarComponent } from './promena-lozinke-lekar/promena-lozinke-lekar.component';
import { PromenaLozinkeMenadzerComponent } from './promena-lozinke-menadzer/promena-lozinke-menadzer.component';
import { KartonPacijentaComponent } from './karton-pacijenta/karton-pacijenta.component';
import { DodajIzvestajComponent } from './dodaj-izvestaj/dodaj-izvestaj.component';


const routes: Routes = [
  {path:'',component:PocetnaComponent},
  {path:'login',component:LoginComponent},
  {path:'pacijent',component:PacijentComponent},
  {path:'lekar',component:LekarComponent},
  {path:'registracija',component:RegistracijaComponent},
  {path:'promena_lozinke',component:PromenaLozinkeComponent},
  {path:'prikaz_lekara',component:PrikazLekaraComponent},
  {path:'profil_lekara',component:ProfilLekaraComponent},
  {path:'pregledi',component:PreglediComponent},
  {path:"lekar_pregledi",component:LekarPreglediComponent},
  {path:"menadzer_logovanje",component:MenadzerLogovanjeComponent},
  {path:"menadzer",component:MenadzerComponent},
  {path:"azuriranjePacijenta",component:AzuriranjePacijentaMenadzerComponent},
  {path:"azuriranjeLekara",component:AzuriranjeLekaraMenadzerComponent},
  {path:'zahtevi',component:ZahteviComponent},
  {path:'dodavanje_lekara',component:DodavanjeLekaraComponent},
  {path:'razno',component:RaznoComponent},
  {path:'menadzer_pregledi',component:MenadzerPreglediComponent},
  {path:'azuriraj_pregled',component:AzurirajPregledComponent},
  {path:'promena_lozinke_lekar',component:PromenaLozinkeLekarComponent},
  {path:'promena_lozinke_menadzer',component:PromenaLozinkeMenadzerComponent},
  {path:'karton_pacijenta',component:KartonPacijentaComponent},
  {path:'dodaj_izvestaj',component:DodajIzvestajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
