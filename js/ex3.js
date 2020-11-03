const visited = {
    name: "Mike",
    countries: [
        {
            name: "USA",
            year: 1984
        },
        {
            name: "Barbados",
            year: 2016
        },
        {
            name: "Jamaica",
            year: 2018
        }
    ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(visited)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });