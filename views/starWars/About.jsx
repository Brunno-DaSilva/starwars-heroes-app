const React = require("react");
const AppLayout = require("../layouts/AppLayout.jsx");

class New extends React.Component {
  render() {
    return (
      <AppLayout>
        <h3>About This App</h3>

        <div className="about-container">
          <div className="text-area-one">
            <h4>App Concept: </h4>
            <p>
              Star Wars Heroes App, is a full-stack fan page web application
              that provides Star Wars fans information regarding the most iconic
              Star Wars heroes. Fully functional and interactive, this web
              application allows users to see a list of heroes displayed as
              cards, edit and save the heroes' data, delete an existent hero,
              and as a caveat users can create their characters.
            </p>
          </div>
          <div className="text-area-two">
            <h4>Technologies Used:</h4>
            <div>
              <ul>
                <li>React</li>
                <li>JSX</li>

                <li>MongoDB</li>
                <li>JSON</li>

                <li>Mongoose</li>
                <li>CSS</li>

                <li>FontAwesome</li>
                <li>Cloudinary</li>

                <li>Adobe Illustrator</li>
                <li>Data retrieved from SWAPI</li>
                <li>
                  Image credits:
                  <a href="https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2/heroes">
                    EA StarWars Battle Front
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-area-three">
            <h4>Approach: </h4>
            <p>
              Initially, I started with a very ambitious plan, to create the
              entire Star Wars universe, providing detailed information about
              starships, characters, species, planets, vehicles, and so forth. I
              attempted to use SWAPI an open-source API to extract the data,
              however, I was having issues to match the API data with my
              designed Schema, so I quickly shift gears and decided to first
              implement my local database and making it precisely match my
              schema so I can render the local information on the page. This
              approach, allow me, to build my data structure, utilizing some
              data from SWAPI and some other data from the EA Star Wars web
              site. With my JSON file matching my schema, I was able to start
              MongoDB and show the data to the page. From this point on I
              started to implement the users' interaction, edit delete an
              existent character, and create a new totally new character.
              Finally, with all the data displaying on the page, I was focusing
              on styling and making it look and feel good.
            </p>
          </div>
          <div className="text-area-four">
            <h4>Challenges:</h4>
            <p>
              Get the image on the new character form to match my database
              schema
            </p>
            <p>
              Since we have no control over what the users will type, I limited
              my database schema to accept strings only, including the object
              item image that contains a URL link to cloudinary. That being
              said, the challenge was how I would get the image for the
              character being created, without making the user search for an
              online stock image source in order to provide the correct string.
              So, the solution was to add a select tag inside the creat new
              character form and provide the user two options, to be a rebel or
              a stormtrooper. I set an if statement that would check which
              selection was made and add the value to the image object item
              utilizing the req.body.image.
            </p>
          </div>
        </div>
        <br />
        <div className="wireFrame">
          <div>
            <h4>Wire Frame</h4>
          </div>
          <div className="img-one">
            <div>
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574878114/imgs_starwars/imgs/home_dobrhe.png"
                alt="ONE"
              />
            </div>
            <div className="wireframe-text">
              <p>Home Page Concept</p>
            </div>
          </div>
          <div className="img-two">
            <div className="wireframe-text">
              <p>See All Heroes Concept</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574878114/imgs_starwars/imgs/heroesPage_fig7fo.png"
                alt="TWO"
              />
            </div>
          </div>
          <div className="img-three">
            <div>
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574878114/imgs_starwars/imgs/newPage_exp0jw.png"
                alt="THREE"
              />
            </div>
            <div className="wireframe-text">
              <p>New Characters Page</p>
            </div>
          </div>
          <div className="img-four">
            <div className="wireframe-text">
              <p>About this App Page</p>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574878114/imgs_starwars/imgs/about_fqmkao.png"
                alt="four"
              />
            </div>
          </div>
          <div className="img-five">
            <div>
              <img
                src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574878114/imgs_starwars/imgs/about_fqmkao.png"
                alt="five"
              />
            </div>
            <div className="wireframe-text">
              <p> Heroes Details Page</p>
            </div>
          </div>
          <div className="img-six">
            <div>
              <a
                target="_blank"
                href="https://s3.amazonaws.com/assets.mockflow.com/app/sitemap/export/Me04bc8cca97e7a5732daa232a00698b11574872896900.png"
              >
                <img
                  src="https://s3.amazonaws.com/assets.mockflow.com/app/sitemap/export/Me04bc8cca97e7a5732daa232a00698b11574872896900.png"
                  alt="six"
                />
              </a>
            </div>
            <div className="wireframe-text">
              <p> Site Development RoadMap</p>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}
module.exports = New;
