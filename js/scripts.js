// Business logic

function isWeb (devType) {
  if (devType === "web" || devType === "frontend") {
    return true;
  } else {
    return false;
  }
}

function isQuestion (question) {
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
  if (number >= 0) {
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
    console.log(name);
    const devType = $("#question2").val();
    console.log(devType);
    const question = $("input#question3").val();
    console.log(question);
    const season = $("input:radio[name=season]:checked").val();
    console.log(season);
    const vibe = $("#question5").val();
    console.log(vibe);
    const number = $("input#question6").val();
    console.log(number);

    console.log(isWeb(devType));
    console.log(isQuestion(question));
    console.log(isHardcore(devType, season));
    console.log(isUpForIt(vibe, season));
    console.log(isGoodNumber(number));

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

// to do

// readme
// gh pages (optional)
// require inputs?

// reset button
// p, h, ul, ol, li, em, strong, a, img, div, and span
// floats + box model