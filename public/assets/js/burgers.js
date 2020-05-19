    $(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
      var id = $(this).children('.burgers-uneaten').val();
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        method: "PUT"
      }).then(
        function() {
          console.log(id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});