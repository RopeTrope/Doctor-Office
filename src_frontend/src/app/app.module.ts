import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PocetnaComponent,
    PacijentComponent,
    LekarComponent,
    RegistracijaComponent,
    PromenaLozinkeComponent,
    PrikazLekaraComponent,
    ProfilLekaraComponent,
    PreglediComponent,
    LekarPreglediComponent,
    MenadzerLogovanjeComponent,
    MenadzerComponent,
    AzuriranjePacijentaMenadzerComponent,
    AzuriranjeLekaraMenadzerComponent,
    ZahteviComponent,
    DodavanjeLekaraComponent,
    RaznoComponent,
    MenadzerPreglediComponent,
    AzurirajPregledComponent,
    PromenaLozinkeLekarComponent,
    PromenaLozinkeMenadzerComponent,
    KartonPacijentaComponent,
    DodajIzvestajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
