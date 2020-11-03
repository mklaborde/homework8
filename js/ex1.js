fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
.then (e => e.json())
.then(paintings => {
    const paintArray = document.getElementById("paintings");
    paintings.forEach(painting => {
        const newElement = document.createElement("tr");
        newElement.innerHTML = `<td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td>`;
        paintArray.appendChild(newElement);
    });
})
.catch(err=> {console.error(err.message);});