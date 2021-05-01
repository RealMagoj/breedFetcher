const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return callback(err || 'ERROR', null);
    } else {
      const data = JSON.parse(body);
      if (data.length < 1) {
        return callback(null, 'Breed not found.');
      } else {
        return callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};