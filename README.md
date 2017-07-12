# Mememinder

## An application that reminds you of certain things based on memes


## API

### Data Model
```
{
   _id: "202934u20mbb289" //unique mongodb ID cannot be changed
   title: String,
   meme_link: String,
   description: String
}
```
### routes


#### POST
----------------------------
`localhost:3000/api/memes`
*create new Mememinder*
----------------------------

#### GET
----------------------------
*get all Mememinder*
`localhost:3000/api/memes`
*get 1 Mememinder*
`localhost:3000/api/memes/:id`
----------------------------

#### PUT
----------------------------
*update 1 Mememinder*
`localhost:3000/api/memes/:id`
----------------------------

#### DELETE
*remove 1 Mememinder*
`localhost:3000/api/memes/:id`
