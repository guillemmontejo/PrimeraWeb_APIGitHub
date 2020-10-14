var obj;
$(document).ready(function(){
  $(".submit").click(function(){
    $.getJSON("https://api.github.com/users/" + $("#uss").val() + "/repos","", function Recibido(json){
      obj = json;
      var len = obj.length;
      var i;
      //$("#table").append("<tr><th>Repo Name</th><th>Description</th><th>Followers</th></tr>");
      for (i = 0; i < len; i++){
        $("#table").append((" <tr><td>" + obj[i].name + "</td><td>" + obj[i].description + "</td><td>" + obj[i].watchers + "</td></tr>"));
      }
    });
    $("#table").show();
  });
});
