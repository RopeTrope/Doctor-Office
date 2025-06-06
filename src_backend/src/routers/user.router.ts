import express from 'express'
import { UserController } from '../controllers/user.controller'

const userRouter = express.Router()


userRouter.route('/login').post(
    (req,res)=> new UserController().login(req,res)
)
userRouter.route('/registruj').post(
    (req,res)=> new UserController().registruj(req,res)
)
userRouter.route('/dohvatiZahtev').post(
    (req,res)=> new UserController().dohvatiZahtev(req,res)
)
userRouter.route('/dohvatiKorisnika').post(
    (req,res)=> new UserController().dohvatiKorisnika(req,res)
)
userRouter.route('/azurirajSifru').post(
    (req,res)=> new UserController().azurirajSifru(req,res)
)
userRouter.route('/dohvatiSveLekare').post(
    (req,res)=> new UserController().dohvatiSveLekare(req,res)
)
userRouter.route('/pronadjiLekare').post(
    (req,res)=> new UserController().pronadjiLekare(req,res)
)
userRouter.route('/dohvatiPacijenta').post(
    (req,res)=> new UserController().dohvatiPacijenta(req,res)
)
userRouter.route('/azurirajPodatke').post(
    (req,res)=> new UserController().azurirajPodatke(req,res)
)
userRouter.route('/dohvatiLekara').post(
    (req,res)=> new UserController().dohvatiLekara(req,res)
)
userRouter.route('/azurirajPodatkeLekar').post(
    (req,res)=> new UserController().azurirajPodatkeLekar(req,res)
)
userRouter.route('/dodajPregled').post(
    (req,res)=> new UserController().dodajPregled(req,res)
)
userRouter.route('/otkaziPregled').post(
    (req,res)=> new UserController().otkaziPregled(req,res)
)
userRouter.route('/dohvatiSvePreglede').post(
    (req,res)=> new UserController().dohvatiSvePreglede(req,res)
)
userRouter.route('/dodajUslugu').post(
    (req,res)=> new UserController().dodajUslugu(req,res)
)
userRouter.route('/izbaciUslugu').post(
    (req,res)=> new UserController().izbaciUslugu(req,res)
)
userRouter.route('/dohvatiSvePacijente').post(
    (req,res)=> new UserController().dohvatiSvePacijente(req,res)
)
userRouter.route('/loginMenadzer').post(
    (req,res)=> new UserController().loginMenadzer(req,res)
)
userRouter.route('/obrisiLekara').post(
    (req,res)=> new UserController().obrisiLekara(req,res)
)
userRouter.route('/obrisiPacijenta').post(
    (req,res)=> new UserController().obrisiPacijenta(req,res)
)
userRouter.route('/dohvatiSveZahteve').post(
    (req,res)=> new UserController().dohvatiSveZahteve(req,res)
)
userRouter.route('/prihvatiZahtev').post(
    (req,res)=> new UserController().prihvatiZahtev(req,res)
)
userRouter.route('/odbijZahtev').post(
    (req,res)=> new UserController().odbijZahtev(req,res)
)
userRouter.route('/dodajLekara').post(
    (req,res)=> new UserController().dodajLekara(req,res)
)
userRouter.route('/dodajZahtevZaPregled').post(
    (req,res)=> new UserController().dodajZahtevZaPregled(req,res)
)
userRouter.route('/dohvatiSveZahteveZaPreglede').post(
    (req,res)=> new UserController().dohvatiSveZahteveZaPreglede(req,res)
)
userRouter.route('/odbijZahtevZaPregled').post(
    (req,res)=> new UserController().odbijZahtevZaPregled(req,res)
)
userRouter.route('/prihvatiZahtevZaPregled').post(
    (req,res)=> new UserController().prihvatiZahtevZaPregled(req,res)
)
userRouter.route('/dohvatiBasSvePreglede').post(
    (req,res)=> new UserController().dohvatiBasSvePreglede(req,res)
)
userRouter.route('/dohvatiPregled').post(
    (req,res)=> new UserController().dohvatiPregled(req,res)
)
userRouter.route('/azurirajPregled').post(
    (req,res)=> new UserController().azurirajPregled(req,res)
)
userRouter.route('/obrisiPregled').post(
    (req,res)=> new UserController().obrisiPregled(req,res)
)
userRouter.route('/dohvatiMenadzera').post(
    (req,res)=> new UserController().dohvatiMenadzera(req,res)
)
userRouter.route('/promenaLozinkeLekar').post(
    (req,res)=> new UserController().promenaLozinkeLekar(req,res)
)
userRouter.route('/azurirajSifruLekar').post(
    (req,res)=> new UserController().azurirajSifruLekar(req,res)
)
userRouter.route('/promenaLozinkeMenadzer').post(
    (req,res)=> new UserController().promenaLozinkeMenadzer(req,res)
)
userRouter.route('/azurirajSifruMenadzer').post(
    (req,res)=> new UserController().azurirajSifruMenadzer(req,res)
)
userRouter.route('/dohvatiSveSpecijalizacije').post(
    (req,res)=> new UserController().dohvatiSveSpecijalizacije(req,res)
)
userRouter.route('/dodajPregledPoSpec').post(
    (req,res)=> new UserController().dodajPregledPoSpec(req,res)
)
userRouter.route('/dodajSpec').post(
    (req,res)=> new UserController().dodajSpec(req,res)
)
userRouter.route('/dodajIzvestaj').post(
    (req,res)=> new UserController().dodajIzvestaj(req,res)
)
userRouter.route('/zabraniNoviIzvestaj').post(
    (req,res)=> new UserController().zabraniNoviIzvestaj(req,res)
)

export default userRouter