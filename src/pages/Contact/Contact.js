import HeaderUI from "../../components/Header/HeaderUI";
import "./Contact.css";

export default function Contact() {
    return (
      <>
        <HeaderUI />
        <div className="contact--homeContainer">
          <div className="contact--bijeli">
            <div className="contact--bijeliLijevo">
              <div className="contact--yellowWrapper"><h1 className="contact--title">KONTAKTIRAJ ŽUĆU</h1></div>
              <h2 className="contact--gmail">gozucogo@gmail.com</h2>
              <p className="contact--opisDetaljno">
                
              </p>
            </div>
            <div className="contact--bijeliDesno">
              <img
                className="contact--bijeliDesnoSlika"
                src="https://storage.glasistre.hr/MediaServer/Photos/Download/150299?Format=1"
              ></img>
            </div>
          </div>
          <div className="contact--narandzasti">
            <div className="contact--footer"></div>
          </div>
        </div>
      </>
    )
}
