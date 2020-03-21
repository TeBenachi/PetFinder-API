// Key and Secret should be hidden
const api = {
  key: "GET YOUR KEY AT Petfinder.com/developers/",
  secret: "GET YOUR SECRET AT Petfinder.com/developers/`"
}

// User input
const info = {
  org: "NY359",
  status: "adoptable"
}

// Generate a token
fetch("https://api.petfinder.com/v2/oauth2/token", {
  method: "POST",
  body: `grant_type=client_credentials&client_id=${api.key}&client_secret=${api.secret}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(resp => {
  return resp.json();
}).then(data => {
  console.log('Token', data);

  // Get animals after successfuly retreiving a token
  return fetch(
    `https://api.petfinder.com/v2/animals?type=cat&organization=${info.org}&status=${info.status}`, {
    headers: {
      Authorization: data.token_type + " " + data.access_token,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}).then(response => {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
}).then(data => {
  const { animals } = data;
  console.log(animals);

  let output = '';



  animals.forEach(animal => {

    output += `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${animal.photos}" >
        <div class="card-body">
          <h5 class="card-title">${animal.name}</h5>
          <p class="card-text">${animal.gender}</p>
        </div>
      </div>
    `
  });
  document.getElementById('results').innerHTML = `${output}`;

}).catch(err => {
  console.warn('Something is not right', err);
})