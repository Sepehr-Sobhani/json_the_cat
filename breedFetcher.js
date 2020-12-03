const request = require("request");
const name = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
  (err, response, body) => {
    if (err) return console.log(err);
    else {
      if (response.statusCode !== 200 || JSON.parse(body).length === 0)
        return console.log("Breed Not Found!");
      else {
        const data = JSON.parse(body);
        console.log(data[0].description);
        console.log(typeof data);
      }
    }
  }
);
