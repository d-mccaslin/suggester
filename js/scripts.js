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
    // Store form response
    const name = $("input#question1").val();
    const devType = $("input#question2").val();
    const question = $("input#question3").val();
    const season = $("input:radio[name=flavor]:checked").val();
    console.log(season);
    const vibe = $("input#question5").val();
    const number = $("input#question6").val();

    // Calculate language
    const language = name;

    // Show response (Ruby / Python / Rust / Swift)
    if (language === "ruby") {
      $("#ruby").show();
    } else if (language === "python") {
      $("#python").show();
    } else if (language === "rust") {
      $("#rust").show();
    } else {
      $("#swift").show();
    }
    $(".languages").children().not("#" + language).hide();
    
    // bonus to do: 1) update background color 2) show response history at bottom 3) include name in response

  })
});