const React = require("react");

class AppLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Star Wars App</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/css/style.css" type="text/css" />
        </head>
        <body>
          <header>
            <div className="nav-bar">
              <ul>
                <li>
                  <a href="/">
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
                      alt="logo"
                    />
                  </a>
                </li>
                <li>
                  <a href="/starWars">See All Heroes & Villains</a>
                </li>
                <li>
                  <a href="/starWars/new">New Character</a>
                </li>
                <li>
                  <a href="/starWars/about">About</a>
                </li>
              </ul>
            </div>
          </header>
          <div>
            <h1>{this.props.title}</h1>
          </div>
          <main className="container">{this.props.children}</main>

          <svg viewBox="0 0 100 25">
            <path fill="#f2ae0a" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
          </svg>

          <footer>
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
              alt="logo"
            />
            <p>Bruno DaSilva</p>
            <br />
            <p>
              <span> Star Wars Heroes APP</span>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}
module.exports = AppLayout;
