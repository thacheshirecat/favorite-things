$(document).ready(function(){

  $("#favorite-form").submit(function(){
    event.preventDefault();

    var things = ["thing-one", "thing-two", "thing-three"];

    things.forEach(function(thing){
      var userInput = $("input#" + thing).val();
      $("." + thing).text(userInput);
    });
    $("#thing-list").show();
  });

});
