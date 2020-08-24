// Business logic

function isWeb (devType) {
  if (devType === "web" || devType === "frontend") {
    return true;
  } else {
    return false;
  }
}

function asksGoodQuestions (question) {
  return question.includes("?");
}

function isHardcore (devType, season) {
  if (devType === "systems" || devType === "hacking") {
    if (season !== "summer" && season !== "spring") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isUpForIt (vibe, season) {
  if (vibe === "energetic" || vibe === "adventurous" || vibe === "spirited") {
    if (season !== "winter") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isGoodNumber (number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// User interface logic

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // Store form response
    const name = $("input#question1").val();
    const devType = $("#question2").val();
    const question = $("input#question3").val();
    const season = $("input:radio[name=season]:checked").val();
    const vibe = $("#question5").val();
    const number = $("input#question6").val();

    // Populate name
    if (name) {
      $("#name").text(name + ", ");
    }

    // Calculate language
    let language;
    if (isWeb(devType)) {
      language = "ruby";
    } else if (isHardcore(devType, season) && asksGoodQuestions(question)) {
      language = "python";
    } else if (isUpForIt(vibe, season) && isGoodNumber(number)) {
      language = "swift";
    } else {
      language = "rust";
    } 

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

    // Add styling classes
    if (language) {
      $("body").removeClass();
      $("body").addClass(language);
    }

    // Populate response history
    if (language) {
      $("#history").show();
      $("ul#languages").prepend("<li>" + language + " </li>");
    }
  })
  $("#resetForm").click(function() {
    $("body").removeClass();
  })
});