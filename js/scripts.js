$(function(){

var equilaterialTest = function(side1,side2,side3) {
  if (side1 === side2 && side1 === side3) {
    return true;
  } else {
    return false;
  }
}
var IsoscelesTest = function(side1,side2,side3) {
  if ((side1 === side2 || side1 === side3 || side2 === side3) && ((side1 === side2 && side1 === side3) === false)) {
    return true;
  } else {
    return false;
  }
}
var ScaleneTest = function(side1,side2,side3) {
  if ((side1 != side2) && (side1 != side3) && (side2 != side3)) {
    return true;
  } else {
    return false;
  }
}

var InvalidTest = function(side1,side2,side3) {
  if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
    return true;
  } else {
    return false;
  }
}


  $("#submitButton").click(function(event){
    event.preventDefault();
    var side1Length = parseInt($("#side1").val());
    var side2Length = parseInt($("#side2").val());
    var side3Length = parseInt($("#side3").val());

    if(equilaterialTest(side1Length, side2Length, side3Length)) {
      $("#result").text("Equilateral");
    }
    if(IsoscelesTest(side1Length, side2Length, side3Length)) {
      $("#result").text("Isosceles");
    }
    if(ScaleneTest(side1Length, side2Length, side3Length)) {
      $("#result").text("Scalene");
    }
    if(InvalidTest(side1Length, side2Length, side3Length)) {
      $("#result").text("This is not a triangle");
    }


  });

});
