var craigInterestCounter = 5;
var craigExpCounter = 3;

// Modal open/close controls
$("#location_button").on('click', function() {
  $("#edit_location_modal").modal();
});

$("#email_button").on('click', function() {
  $("#edit_email_modal").modal();
});

$("#interests_button").on('click', function() {
  $("#edit_interests_modal").modal();
});

$("#experience_button").on('click', function() {
  $("#edit_experience_modal").modal();
});

$("#availability_button").on('click', function() {
  $("#edit_availability_modal").modal();
});

// Causes all text to be selected when a textbox is focused.
$("input:text").focus(function() {$(this).select()});

// Interests modal controls
function addCloseToInterestField(idNum) {
  var buttonSelector = "#interest_close_" + idNum;
  var inputSelector = "#interest_" + idNum;

  $(buttonSelector).on('click', function() {
    $(inputSelector).hide();
  });
};

//Initialize the ones that are there
for(var i = 1; i <= 5; i++) {
  addCloseToInterestField(i);
}

$("#add_interest_field").on('click', function() {
  craigInterestCounter++;
  var addedHtml = '<div id="interest_' + craigInterestCounter + '" class="input-group exp-input">' +
      '<div class="input-group-addon">' + craigInterestCounter + '</div>' + 
      '<input class="form-control exp-input" type="text" placeholder="Enter another interest"/>' +
      '<span id="interest_close_' + craigInterestCounter + '" class="close exp-input">&times;</span>' +
      '</div>';

  $("#add_interest_field").before(addedHtml);
  addCloseToInterestField(craigInterestCounter);
});


// Experience modal controls
function addCloseToExpField(idNum) {
  var buttonSelector = "#exp_close_" + idNum;
  var inputSelector = "#exp_" + idNum;

  $(buttonSelector).on('click', function() {
    $(inputSelector).hide();
  });
};

//Initialize the ones that are there
for(var i = 1; i <= 3; i++) {
  addCloseToExpField(i);
}

//Add new ones on the fly
$("#add_exp_field").on('click', function() {
  craigExpCounter++;
  var addedHtml = '<div id="exp_' + craigExpCounter + '" class="input-group exp-input">' +
      '<div class="input-group-addon">' + craigExpCounter + '</div>' + 
      '<input class="form-control exp-input" type="text" placeholder="Enter new experience"/>' +
      '<span id="exp_close_' + craigExpCounter + '" class="close exp-input">&times;</span>' +
      '</div>';

  $("#add_exp_field").before(addedHtml);
  addCloseToExpField(craigExpCounter);
});