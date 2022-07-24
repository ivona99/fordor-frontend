import HeaderUI from "../../components/Header/HeaderUI";
import "./About.css";

export default function About() {
  return (
    <>
      <HeaderUI />
      <div className="about--homeContainer">
        <div className="about--bijeli">
          <div className="about--bijeliLijevo">
            <h1 className="about--title">GLAS SAVJESNIH</h1>
            <p className="about--opisDetaljno">
              Sve je krenulo u jednom gradu pored mora, u kojem su gradske
              vlasti malo zakazale u zaštiti jedne predivne uvale u okolici
              grada, te su građani - savjesni građani, uzeli stvar u svoje ruke
              i stvorili Žuću. Žućo se trenutno širi poput žutice, rađa se po
              obalama, parkovima, potocima, kvartovima, šumama, planinama i
              nizinama, a uskoro neće biti smeća, bezobzirnog vozača i eko hulje
              kojeg Žućo nije požutio. Uz to, Žućo je tu da ožućuje i one koji
              stavljaju svoj interes ispred interesa zajednice. <br/> <br/> Dobro došao u
              Žućo, jedinstveni najžući pokret proizašao iz žutog papira!
              Pogledaj u nastavku Žućo crtane filmove da te na simpatičan način
              informiraju o čemu se radi.
            </p>
          </div>
          <div className="about--bijeliDesno">
            <img
              className="about--bijeliDesnoSlika"
              src="https://lh4.googleusercontent.com/1mvXJR7foreCK3NqhioxAs5Jx0mk-olHLZ6dHzxXwzALxJOTgzuIDTcMH2KS_xV3lN0MhKY9bZNLfVKtpdCohTRZPYdbrEHNqek6E-Eq0czd1ESV=w1280"
            ></img>
          </div>
        </div>
        <div className="about--narandzasti">
          <div className="about--footer"></div>
        </div>
      </div>
    </>
  );
}
