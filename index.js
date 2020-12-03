const breednName = process.argv[2];
const { fetchBreedDescription } = require("./breedFetcher");

fetchBreedDescription(breednName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
