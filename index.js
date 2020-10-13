var obj;
function checkDrink() {
console.log(obj);
}

$(document).ready(function(){
  $("#senddata").click(function(){
    $("#tablerepos").empty();
    $.getJSON(("https://api.github.com/users/") + $("#usr").val() + "/repos", function JSONRecibido(json)
    {
      obj = json;
      var len = obj.length;
      var i;
      $("#tablerepos").append("<tr><th>Repo Name</th><th>Description</th><th>Followers</th></tr>");
      for (i = 0; i < len; i++){
        $("#tablerepos").append((" <tr><td>" + obj[i].name + "</td><td>" + obj[i].description + "</td><td>" + obj[i].watchers + "</td></tr>"));
      }
    });
    $("#tablerepos").show();
  });
});
