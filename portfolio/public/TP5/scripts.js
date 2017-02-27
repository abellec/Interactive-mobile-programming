function jsonCallback(json){
  $.each(json , function (cle, json){
    $("#text").append("<p>"+ json.name + " email: <a href=" + json.email + ">" + json.email + "</a></p>");
  });
}

function loadList(){
$.ajax({
  url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
  dataType: "jsonp"
});
}
