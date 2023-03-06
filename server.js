const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async(request, response) =>{
    try {
        const restaurants = await Restaurant.findAll(); // Retrieve all restaurants from the database
        response.json(restaurants); // Send the restaurants as a JSON response
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
})

app.get('/restaurants/:id', async(req, res) => {
  keyForRes = req.params.id
  objFound = await Restaurant.findByPk(keyForRes)
  res.json(objFound)

})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port http://localhost:${port}/restaurants/1`);
})