function addPerson(nameOfThePerson)
{
  var list = document.getElementById("personList");
  list.innerHTML += "<p>" + nameOfThePerson + "</p>";
}
