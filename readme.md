# Star Wars Heroes App!

## Concept: 
Star Wars Heroes App, is a full-stack fan page web application that provides Star Wars fans information regarding the most iconic Star Wars heroes. Fully functional and interactive, this web application allows users to see a list of heroes displayed as cards, edit and save the heroes' data, delete an existent hero, and as a caveat users can create their characters.

## Technologies Used: 

React JSX MongoDB JSON Mongoose CSS FontAwesome Cloudinary Adobe Illustrator Data retrieved from SWAPI Image credits:EA StarWars Battle Front

## Approach: 

Initially, I started with a very ambitious plan, to create the entire Star Wars universe, providing detailed information about starships, characters, species, planets, vehicles, and so forth. I attempted to use SWAPI an open-source API to extract the data, however, I was having issues to match the API data with my designed Schema, so I quickly shift gears and decided to first implement my local database and making it precisely match my schema so I can render the local information on the page. This approach, allow me, to build my data structure, utilizing some data from SWAPI and some other data from the EA Star Wars web site. With my JSON file matching my schema, I was able to start MongoDB and show the data to the page. From this point on I started to implement the users' interaction, edit delete an existent character, and create a new totally new character. Finally, with all the data displaying on the page, I was focusing on styling and making it look and feel good.


## Challenges: Get the image on the new character form to match my database schema 
Since we have no control over what the users will type, I limited my database schema to accept strings only, including the object item image that contains a URL link to cloudinary. That being said, the challenge was how I would get the image for the character being created, without making the user search for an online stock image source in order to provide the correct string. So, the solution was to add a select tag inside the creat new character form and provide the user two options, to be a rebel or a stormtrooper. I set an if statement that would check which selection was made and add the value to the image object item utilizing the req.body.image.
