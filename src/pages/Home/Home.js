import Header from "../../components/Header/Header";
import "./Home.css";
import HeaderUI from "../../components/Header/HeaderUI";

export default function Home() {
  return (
    <>
      <HeaderUI />
      <div className="homeContainer">
        <div className="bijeli">
          <div className="bijeliLijevo">
            <h1 className="title">Uočili ste 'parking papka', vandala, ili izgubljenog psa? Mislite da javni organi neće htjeti čuti vaše brige?</h1>
            <p className="opisDetaljno">Na pravom ste mjestu, jer Žućo uvijek sluša. <br />
              Žućo je glas svih savjesnih građana, a Veliki Brat onima koji misle da su veći od okoliša i zakona.
              Budite dio projekta koji će stati u kraj svim kršiteljima ljudskih morala, ekološko neobrazovanih mangupa, ili jednostavno usrećite jadnog psa koji je već danima izgubljen i traži svoj topli dom.
              Nagradite one koji čine dobro za svoj okoliš, prepoznajte njihov rad, te ih javno pohvalite na našem sistemu.

              <br /> <br />Želite li da Vi pravite promjene, i da Vaše ime bude pod reflektorima? Registrujte projekat za zajednicu na našoj Aktivist platformi, te zajedno sa našom zajednicom pokrenite dobrotvorni projekat.
            </p>
          </div>
          <div className="bijeliDesno">
            <img className="bijeliDesnoSlika" src="https://i.ibb.co/2tBvWnH/communitylogo.png"></img>
          </div>
        </div>
        <div className="narandzasti">
          <div className="footer"></div>
        </div>
      </div>
    </>
  );
}

