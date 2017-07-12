# Mememinder

## An application that reminds you of certain things based on memes

## Getting Started

Requirements:
- Mongodb installed on local machine and running
- Nodejs version 8.0 and above

Installation:
```sh
$ cd mememinder-demo
$ npm install
$ npm start
```

## API

### Data Model
```
//the request body should look like this
{
   "meme": {
      "title": String, //title of mememinder(required)
      "meme_link": String, //url link(required)
      "description": String //description of mememinder(not required)
   }
}

```
### routes


#### POST
*create new Mememinder*

`localhost:3000/api/memes`


#### GET

*get all Mememinder*

`localhost:3000/api/memes`

*get 1 Mememinder*

`localhost:3000/api/memes/:id`


#### PUT

*update 1 Mememinder*

`localhost:3000/api/memes/:id`


#### DELETE

*remove 1 Mememinder*

`localhost:3000/api/memes/:id`
