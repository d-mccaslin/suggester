// Business logic


// User interface logic

$(document).ready(function() {
  // console.log("This is working.");
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const answer1 = $("input#question1").val();
    const answer2 = $("input#question2").val();
    const answer3 = $("input#question3").val();
  })
});