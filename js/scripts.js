var things = ["thing-one", "thing-two", "thing-three"];

$(document).ready(function(){
  $("#favorite-form").submit(function(){
    event.preventDefault();

    var newArray = [];
    var newArrayTwo = [];

    things.forEach(function(thing){
      var userInput = $("input#" + thing).val();
      newArray.push(userInput);
      $("." + thing).text(userInput);
    });
    $(".new-array").text(newArray);
    newArrayTwo.push(newArray[0]);
    newArrayTwo.push(newArray[2]);
    alert(newArrayTwo);
    $(".one-list-two").text(newArrayTwo[0]);
    $(".two-list-two").text(newArrayTwo[1]);
    $("#thing-list").show();
  });
});
