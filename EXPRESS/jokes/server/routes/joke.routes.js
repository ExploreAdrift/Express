const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/joke/", JokeController.findAllJoke);
  app.get("/api/joke/:id", JokeController.findOneSingleJoke);
  app.put("/api/joke/update/:id", JokeController.updateExistingJoke);
  app.post("/api/joke/new", JokeController.createNewJoke);
  app.delete("/api/joke/delete/:id", JokeController.deleteAnExistingJoke);
};
