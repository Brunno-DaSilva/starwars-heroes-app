const React = require("react");
const AppLayout = require("../layouts/AppLayout.jsx");

class Show extends React.Component {
  render() {
    const btnStyle = {
      textAlign: "center",
      width: "4vw",
      height: "1.8vh"
    };

    const btnDelete = {
      textAlign: "center",
      backgroundColor: "#f06e54",
      zIndex: "15"
    };
    const formOverrideStyle = {
      boxShadow: "none",
      backgroundColor: "transparent"
    };
    const divAttackContainer = {
      width: "35vw"
    };

    return (
      <AppLayout>
        <h3>Details Page</h3>
        <br />
        <br />

        <div className="show-image-bg">
          <img src={this.props.images} alt={this.props.name} />
        </div>
        <div className="show-container">
          <h4> {this.props.name}</h4>
          <p>
            <span>Weapon:</span> {this.props.weapon}
          </p>
          <p>
            <span>Home World: </span>
            {this.props.homeworld}
          </p>
          <p>
            <span>Attack: </span> {this.props.attack}
          </p>
          <div style={divAttackContainer}>
            <p>
              <span>Attack Description: </span> {this.props.attackDescription}
            </p>
          </div>
        </div>
        <div className="btn-container">
          <a
            className="btn-main"
            style={btnStyle}
            href={`/starWars/edit/${this.props._id}`}
          >
            Edit
          </a>
          <a className="btn-main" style={btnStyle} href="/starWars">
            Go Back
          </a>
        </div>
        <form
          action={`/starWars/${this.props._id}?_method=delete`}
          method="post"
          style={formOverrideStyle}
        >
          <input
            type="submit"
            value="Delete"
            className="btn-main"
            style={btnDelete}
          />
        </form>
      </AppLayout>
    );
  }
}
module.exports = Show;
