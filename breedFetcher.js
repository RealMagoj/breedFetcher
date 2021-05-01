const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  if (err || response.statusCode !== 200) {
    console.log('There was an error.');
  } else {
    const data = JSON.parse(body);
    if (data.length < 1) {
      console.log('Breed not found.');
    } else {
      console.log(data[0].description);
    }
  }
});