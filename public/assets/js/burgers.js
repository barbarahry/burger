// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){

 

  console.log("ANDY RULES")

$("#create-burger").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
 
  var newBurger = {
    neworder: $("#input_burger").val().trim()//,
//    devoured: $("[name=devoured]:checked").val().trim()
 //   devoured: $("[devoured]:checked").val().trim()
  };
  console.log("\nnewBurger: " + newBurger.neworder);
  
  // Send the POST request.
  $.ajax("/tictactoe3",{
    // url: "/",
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


$(".change-devoured").on("click", function(event) {
  console.log("\nchange-devoured    !!    change-devoured");
  console.log("\n burgers.change-devoured.data", $(this).data);
  var id = $(this).data("id");
  console.log("\n burgers.change-devoured.id", id);
  var gameMove = $(this).data("gamemove");
  console.log("\n burgers.change-devoured.gamemove", gameMove);
  var cel = $(this).data("cel");
  console.log("\n burgers.change-devoured.cel", cel);
  var player = "";
  if ($(this).data("player") == "X") {
    player = "O";
  } else {
    player = "X";
  };
  console.log("\n burgers.change-devoured.player", player);
  
  var gameMoveNum = parseInt(gameMove) + 1;
  
  //var colUpdate = cel + "='" + player +"'";
  var colUpdate = cel + "='" + player +"', lastPlayer='" + player + "', gameMove='" + gameMoveNum + "'";
  if (gameMoveNum==9) {
    colUpdate += ", gameOver =" + 1;
  };
  console.log("\n burgers.change-devoured.colUpdate", colUpdate);
   var newEat = 1;

   var newDevoured = {
    devoured: newEat
   };

   var newEat = "X";
   var newDevoured = {
    cel7: newEat
   };

   // Send the PUT request.
   $.ajax("/tictactoe3" + id + colUpdate , {
     type: "PUT",
     data: newDevoured
   }).then(
     function() {
       console.log("changed Devoured for", newEat);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });
/*
$("#delete-burger").on("click", function(event) {
  console.log("delete-burger");
   var id = $(this).data("id");
 
   // Send the DELETE request.   api/burgers/
   $.ajax("/" + id, {
     type: "DELETE"
   }).then(
     function() {
       console.log("deleted burger", id);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });
*/
 $(".delete-burger").on("click", function(event) {
  console.log("\n.delete-burger     !!     .delete-burger");
   var id = $(this).data("id");
 
   // Send the DELETE request.   api/burgers/
   $.ajax("/tictactoe3" + id, {
     type: "DELETE"
   }).then(
     function() {
       console.log("deleted burger", id);
       // Reload the page to get the updated list
       location.reload();
     }
   );
 });




})
