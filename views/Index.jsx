const React = require("react");
const AppLayout = require("./layouts/AppLayout.jsx");

class Index extends React.Component {
  render() {
    const h2Style = {
      marginTop: "-1%",
      fontSize: "10rem"
    };
    const imgBg = {
      position: "absolute",
      top: "100vh",
      left: "40vw",
      width: "20vw",
      opacity: "0.4",
      zIndex: "2"
    };
    return (
      <AppLayout>
        <div className="img-overlay"></div>
        <div className="container">
          <h2 id="sectionOne" style={h2Style}>
            Star Wars
          </h2>
          <div>
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574832321/imgs_starwars/imgs/chooseW_unwmnr.png"
              alt="Choose Wisely"
              style={imgBg}
            />
          </div>
          <div className="btn-container">
            <div>
              <a className="btn-main" href="/starWars">
                See All Heroes & Villains
              </a>
            </div>
            <div>
              <a className="btn-main" href="/starWars/new">
                New Character
              </a>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}
module.exports = Index;
