const React = require("react");
const AppLayout = require("../layouts/AppLayout.jsx");

class New extends React.Component {
  render() {
    const h3Style = {
      textAlign: "center",
      fontSize: "1.5rem"
    };

    const imgBg1 = {
      position: "absolute",
      top: "25vh",
      left: "2vw",
      width: "30vw",
      opacity: "0.1",
      zIndex: "2"
    };
    const imgBg2 = {
      position: "absolute",
      top: "25vh",
      left: "68vw",
      width: "30vw",
      opacity: "0.1",
      zIndex: "2"
    };

    return (
      <AppLayout>
        <h3>Create a New Character</h3>
        <div>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574832321/imgs_starwars/imgs/chooseW_unwmnr.png"
            alt="Choose Wisely"
            style={imgBg1}
          />
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574832321/imgs_starwars/imgs/chooseW_unwmnr.png"
            alt="Choose Wisely"
            style={imgBg2}
          />
        </div>

        <form action={`/starWars`} method="post">
          <h3 style={h3Style}>Choose Wisely</h3>
          <p>
            <br />
            <select name="images">
              <label>Pick Sides:</label>
              <option selected value="empty"></option>
              <option value="https://res.cloudinary.com/duprwuo4j/image/upload/v1574820294/imgs_starwars/imgs/rebel_blhcz3.png">
                Rebel Soldier
              </option>
              <option value="https://res.cloudinary.com/duprwuo4j/image/upload/v1574820294/imgs_starwars/imgs/stormtrooper_zmgu0l.png">
                Stormtrooper
              </option>
            </select>
          </p>
          <br />
          <p>
            <label>Name:</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label>Weapon:</label>
            <input type="text" name="weapon" />
          </p>
          <p>
            <label>Home World:</label>
            <input type="text" name="homeworld" />
          </p>
          <p>
            <label>Attack:</label>
            <input type="text" name="attack" />
          </p>
          <p>
            <label>Description:</label>
            <input type="text" name="attackDescription" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </AppLayout>
    );
  }
}
module.exports = New;
