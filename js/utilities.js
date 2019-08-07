"use strict";

var cmd = function(system, what, data) {
  let DONE = "done: ";
  let ERROR = "error: ";
  let response = android.cmd(system, what, data);
  if(response.startsWith(DONE)) {
    return response.substring(DONE.length);
  }
  else if(response.startsWith(ERROR)) {
    throw Error(response.substring(ERROR.length));
  }
  else {
    throw Error("invalid command response: " + response);
  }
}

window.actions = {
  start_settings: function() { cmd("settingsactivity", "start", "") },
  start_location: function() { cmd("location", "start", ""); },
  makevisible: function() {
    $("body").css("visibility", "visible");
    cmd("visibility", "show", "");
  }
};

$ondone(
  function() {
    actions.makevisible()
    actions.start_location()
    $("#settings").click(settings);
  }
);
$done();
