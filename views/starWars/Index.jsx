const React = require("react");
const AppLayout = require("../layouts/AppLayout.jsx");

class Index extends React.Component {
  render() {
    const formOverrideStyle = {
      boxShadow: "none",
      backgroundColor: "transparent"
    };
    return (
      <AppLayout title="Star Wars index Page">
        <div className="pokeCards">
          {this.props.starWars.map((starWars, index) => {
            return (
              <div className="card">
                <div className="card-header">
                  <div>
                    <a href={`/starWars/${starWars._id}`}>
                      <span className="name">{starWars.name}</span>
                    </a>
                  </div>
                  <div className="cardIcons">
                    <a href={`/starWars/edit/${starWars._id}`}>
                      <i className="fas fa-pencil-alt cool"></i>
                    </a>
                  </div>
                </div>
                <div className="card-main">
                  <a href={`/starWars/${starWars._id}`}>
                    <img
                      className="material-icons"
                      src={`${starWars.images}`}
                      alt={`${starWars.name}`}
                    />
                  </a>

                  <div class="main-description">
                    <div>
                      <p>{starWars.weapon}</p>
                    </div>
                    <div>
                      <p>{starWars.attack}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <br />
        <br />
        <div>
          <a className="btn-main" href="/starWars/new">
            New Character
          </a>
        </div>
      </AppLayout>
    );
  }
}
module.exports = Index;
