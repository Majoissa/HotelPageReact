import react from "react";

const TouristsInfoCards = () => {
  return (
    <div className="row custom-row">
      <div className="card col-sm-4">
        <img
          src="https://img.freepik.com/foto-gratis/vista-puente-schuman-noche-lyon-francia-europa_268835-1080.jpg?w=996&t=st=1689926646~exp=1689927246~hmac=7c1c41843db1e2baea9a2a111deb589c96529d6eb020bf2e7eee27f918317672"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Visit Glasgow</h3>
          <p>
            Discover world-class museums, art galleries, and theaters that
            reflect the city's creative spirit. The Kelvingrove Art Gallery and
            Museum will transport you through time with its eclectic
            collections, while the Gallery of Modern Art showcases contemporary
            brilliance. Explore the breathtaking architecture of the Glasgow
            School of Art, a masterpiece designed by Charles Rennie Mackintosh.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
      <div className="card col-sm-4">
        <img
          src="https://img.freepik.com/foto-gratis/canales-agua-liverpool-reino-unido-edificios-modernos-royal-liver-building-clima-nublado_1268-19755.jpg?w=1060&t=st=1689926749~exp=1689927349~hmac=692fa6e2e292f7efca69518fb9be2feab16fc9849e9c3401d40ac94bb9b37e16"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Visit Manchester</h3>
          <p>
            Manchester is a melting pot of cultures, each contributing to the
            city's vibrant arts and cultural scene. Immerse yourself in the
            world of art at the Manchester Art Gallery, or lose yourself in the
            creative energy of the Northern Quarter's street art. The Whitworth
            Art Gallery offers a delightful fusion of art and nature, surrounded
            by lush gardens.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card col-sm-4">
        <img
          src="https://img.freepik.com/foto-gratis/big-ben-puente-westminster-al-atardecer-londres-reino-unido_268835-1395.jpg?w=996&t=st=1689926870~exp=1689927470~hmac=d27d9d4a628e723574d4ccf7e21350e94cc2824187e638693f5e97325746447b"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Visit London</h3>
          <p>
            Welcome to London, the magnificent capital of the United Kingdom and
            a city that pulsates with history, diversity, and enchantment. As
            you step into this vibrant metropolis, prepare to embark on a
            journey of discovery like no other. From iconic landmarks to hidden
            gems, London has an allure that captivates hearts from all corners
            of the world.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristsInfoCards;
