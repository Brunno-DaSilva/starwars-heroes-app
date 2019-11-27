const React = require("react");
const AppLayout = require("../layouts/AppLayout.jsx");

class Edit extends React.Component {
  render() {
    const imgBg1 = {
      position: "absolute",
      top: "44vh",
      left: "6vw",
      width: "40vw",
      opacity: "0.2",
      zIndex: "2"
    };
    return (
      <AppLayout>
        <h3>Star Wars Edit Page</h3>
        <div>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574866564/imgs_starwars/imgs/deathStar_a57zbh.jpg"
            alt="DeathStar"
            style={imgBg1}
          />
        </div>
        <form action={`/starWars/${this.props._id}?_method=put`} method="post">
          <p>
            <label>Name:</label>
            <input type="text" value={this.props.name} name="name" />
          </p>
          <p>
            <label>Weapon:</label>
            <input type="text" value={this.props.weapon} name="weapon" />
          </p>
          <p>
            <label>Attack:</label>
            <input type="text" value={this.props.attack} name="attack" />
          </p>
          <p>
            <label>Description:</label>
            <input
              type="text"
              value={this.props.attackDescription}
              name="attackDescription"
            />
          </p>
          <p>
            <label>Home World:</label>
            <input type="text" value={this.props.homeworld} name="homeworld" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </AppLayout>
    );
  }
}
module.exports = Edit;
