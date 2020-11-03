const formListener = document.querySelector("form");
formListener.addEventListener("submit", e => {
    const username = formListener.elements.user.value;
    console.log(username);
    fetch (`https://api.github.com/users/${username}`)
        .then (response => response.json())
        .then (e => {
            const picture = document.createElement("img");
            picture.src = e.avatar_url;
            console.log(e.avatar_url);
            const info = document.createElement("tr");
            info.innerHTML = `<td>Name</td><td>${e.name}</td>`;
            const info2 = document.createElement("tr");
            info2.innerHTML = `<td>Blog</td><td>${e.blog}</td>`;
            const info3 = document.createElement("tr");
            info3.innerHTML = `<td>Created</td><td>${e.created_at}</td>`;
            const picplace = document.getElementById("picSpot");
            picplace.appendChild(picture);
            const resultsElement = document.getElementById("results");
            resultsElement.appendChild(info);
            resultsElement.appendChild(info2);
            resultsElement.appendChild(info3);
        })
        .catch(err=> {
            console.error(err.message);
        });
});