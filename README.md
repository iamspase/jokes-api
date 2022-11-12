# Jokes RESTFul API
#### A simple REST API written developed with TypeScript, Node, Express and MongoDB

### Features
- Get jokes by category and limit
- Get a joke by ID
- Create a joke with title, category and answer
- Update a joke's data such as title
- Delete a joke
- Get the amount of available jokes in the database

### Routes
- [***GET***] ``api/jokes/`` - ```optional query params: category, limit```
    - Sends back jokes with the given category (if any).
    If no query params are passed 10 random jokes will be sent of random categories
- [***GET***] ``api/jokes/:id`` - ```required params: the id of the joke```
    - Sends back a joke with the given ID
- [***GET***] ``api/jokes/amount`` - ```no params```
    - Responds with the amount of jokes available in the database
- [***POST***] ``api/jokes/`` - ```optional params: none```
    - Creates a joke with the given request body data such as title,
    category and answer (optional)
- [***PUT***] ``api/jokes/:id`` - ```required params: the id of the joke to update```
    - Updates the joke with the given ID with the data passed in the request's body such as `title, answer, category`
- [***DELETE***] ``api/jokes/:id`` - ```required params: the id of the joke to delete```
    - Deletes the joke with the given ID.

### Installation

##### NOTE: In order this project to work properly you must have Node.js LTS version, Git and MongoDB driver (you can use Atlas if you want to) installed on your device

Simply run ```git clone https://github.com/spr1ng7/jokes-api``` and then run ```npm install``` from the CLI in the project's folder to install all the required node packages to run this project