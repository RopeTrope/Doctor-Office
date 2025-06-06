import { Izvestaj } from "./izvestaj";
import { Pregled } from "./pregled";
import { Zakazan_pregled } from "./zakazan_pregled";

export class Pacijent{

    ime:string;
    prezime:string;
    adresa:string;
    kontakt:string;
    lozinka:string;
    imejl:string;
    korisnicko_ime:string;
    slika:string;
    zakazani_pregledi:Array<Zakazan_pregled>
    izvestaji:Array<Izvestaj>

}