// Business logic

function isWeb (answer1, answer2, answer3, answer4) {
  return true;
}

function isFrontEnd (answer1, answer2, answer3, answer4) {
  return true;
}

function isBackEnd (answer1, answer2, answer3, answer4) {
  return true;
}

function isHardcore (answer1, answer2, answer4, answer4) {
  return true;
}

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