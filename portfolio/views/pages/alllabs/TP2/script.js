function addPerson()
{
    var firstNameElement = document.getElementById("firstNameField");
    console.log("Adding a person: " + firstNameElement.value);
    var nameBox = document.getElementById("personNameBox");
    nameBox.innerText = firstNameElement.value;
}

function addSomething()
{
  var inputField = document.getElementById("somethingField");
  var results = document.getElementById("resultBox");

  var newElement = document.createElement("INPUT");
  newElement.setAttribute("type", "text");
  newElement.setAttribute("placeholder",inputField.value);
  results.appendChild(newElement);
}
