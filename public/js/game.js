$(document).ready(function () {
    console.log("testing connection for this game");
    //updating cell 1
    
    $(".cell").on("click", function () {
        console.log(this.id);
        var id = $(this).data("id");
        // Send the PUT request.   api/?/
        $.ajax("/" + id, {
            type: "PUT"
        }).then(function (response) {
        GET (data);  //  expect constructor as in app/data/gameStatus.js
                      //  new for TTT
          // $("#cel1").text(data[0].celVal);
          // $("#cel2").text(data[1].celVal); //assumes that only cel val array is returned in data
          // $("#cel2").text(data.celVal[2]); //assumes that cel val array is returned in data object
           if (data.gameOver==true) { 
            Display "end of game";
            if (data.winnerName==ThisPlayerName) { 
              Display "You Won";
             } 
            else { 
              Display "You lost"
             }
           }
         for (var i=0; i<data.celVal.length; i++) {
           $("#cel" + i+1).text(data.celVal[i]);
         }
         // end of TTT


            /// We get back the full games state, including all 9 cells
            // for each cell in response, change the image


            // if cell is 0, change to 0 image
            // if cell is x, change to x image
            // if cell is blank, NO IMG

            console.log("move made in this cell", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // //updating cell 2
    // $("#cel2").on("click", function () {
    //     console.log("\n cell 2");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 3
    // $("#cel3").on("click", function () {
    //     console.log("\n cell 3");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 4
    // $("#cel4").on("click", function () {
    //     console.log("\n cell 4");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 5
    // $("#cel5").on("click", function () {
    //     console.log("\n cell 5");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 6
    // $("#cel6").on("click", function () {
    //     console.log("\n cell 6");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 7
    // $("#cel7").on("click", function () {
    //     console.log("\n cell 7");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 8
    // $("#cel8").on("click", function () {
    //     console.log("\n cell 8");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    // //updating cell 9
    // $("#cel9").on("click", function () {
    //     console.log("\n cell 9");
    //     var id = $(this).data("id");
    //     // Send the PUT request.   api/?/
    //     $.ajax("/" + id, {
    //         type: "PUT"
    //     }).then(function () {
    //         console.log("move made in this cell", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });


});