const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (err, response, body) => {
      if (err || JSON.parse(body) == "") {
        return callback(err, null);
      } else {
        const data = JSON.parse(body);
        return callback(null, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
