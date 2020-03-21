# Beginner api projects No.5: PetFinder-API 

> This project is still in working progress!! 


This API uses Vanilla JS, No frameworks. 

Developer key & secret can be obtained at Petfinder.com/developers/


### Things to do list

(1) Create a form to get user input (by zipcode)

(2) Output image correctry.  Each pet comes with 3 photos in different sizes.

(3) Output Bootstrap card correctly. 

(4) Clean up the HTML output code 

(5) Restrict Key and Sercret on server side, possibly using PHP...?


### Things I learn....

(1) Getting an access token by using Key and Sercret. Petfinder API uses OAuth for authentication. 
```

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

```

[Here is a great tutorial on getting an access token using Vanilla JS by Gomakethings.com](https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/)



