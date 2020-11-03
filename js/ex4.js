let nameValue, emailValue, paymentValue, promotionValue, locationValue;
document.querySelector("form").addEventListener("submit", e=> {
    nameValue=document.getElementById("name").textContent;
    emailValue=document.getElementById("email").textContent;
    paymentValue=document.getElementById("payment").textContent;
    promotionValue=document.getElementById("promotion").textContent;
    locationValue=document.getElementById("location").textContent;
    const newElement = document.createElement("tr");
    newElement.innerHTML = `<td>Name</td><td>${nameValue}</td>`
    resultsElement = document.getElementById("results");
    resultsElement.appendChild(newElement);
    newElement.innerHTML = `<td>Email</td><td>${emailValue}</td>`
    resultsElement = document.getElementById("results");
    resultsElement.appendChild(newElement);
    newElement.innerHTML = `<td>Payment</td><td>${paymentValue}</td>`
    resultsElement = document.getElementById("results");
    resultsElement.appendChild(newElement);
    newElement.innerHTML = `<td>Promotion</td><td>${promotionValue}</td>`
    resultsElement = document.getElementById("results");
    resultsElement.appendChild(newElement);
    newElement.innerHTML = `<td>Location</td><td>${locationValue}</td>`
    resultsElement = document.getElementById("results");
    resultsElement.appendChild(newElement);
});