//business logic
function Vacation(place,location,landmark,time,notes) {
  this.placeVisited = place;
  this.newLocation = location;
  this.newLandmark = landmark;
  this.newTime = time;
  this.newNotes = notes;
}

//user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var placeVisited1 = $("input#new-destination").val();
    var newLocation1 = $("input#new-location").val();
    var newLandmark1 = $("input#new-landmark").val();
    var newTime1 = $("#time").val();
    var newNotes = $("input#notes").val();

    var newPlaceVisited1 = new Vacation(placeVisited1,newLocation1,newLandmark1,newTime1,newNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newPlaceVisited1.placeVisited + "</span></li>");

    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("#time").val("");
    $("input#notes").val("");
    $(".destination").last().click(function() {
    $("#show-destination").show();
    $("#show-destination h2").text(newPlaceVisited1.placeVisited);
    $(".location").text(newPlaceVisited1.newLocation);
    $(".landmark").text(newPlaceVisited1.newLandmark);
    $(".time-of-year").text(newPlaceVisited1.newTime);
    $(".notes").text(newPlaceVisited1.newNotes);
   });
  });
});
