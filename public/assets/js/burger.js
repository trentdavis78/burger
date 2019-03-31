// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
        console.log("onClickofButton");
      var id = $(this).data("id");
  
      var devourBurger = {
            devoured : true
      };
     console.log(id);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourBurger
      }).then(
        function() {
          console.log("Devoured", devourBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("in Add burger")
    
        var newBurger = {
          name: $("#bu").val().trim()
        };
    
        console.log("newBurger",newBurger.name);

        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });



  });