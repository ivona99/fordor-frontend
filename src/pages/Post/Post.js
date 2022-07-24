import Header from "../../components/Header/Header";
import "./Post.css";
import Map from "../../components/Map/Map";

export default function Post() {
  return (
    <div className="post">
      <Header isAdmin={false} page={"post"} />
      <div className="postContainer">
        <div className="naslov">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </div>
        <div className="slikaOpisDiv">
          <div className="slikaContainer">
            <img
              className="slika"
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            ></img>
          </div>
          <div className="opis">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <Map className="mapContainer"></Map>
    </div>
  );
}
