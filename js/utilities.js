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
  start_settings_activity: function() { cmd("settingsactivity", "start", "") },
  start_location: function() { cmd("location", "start", ""); },
  start_screen: function(name) {
    if(uiscreens[name] === undefined) {
      throw Error("there is no screen called " + name);
    }
    uiscreens[name].start();
  },
  makevisible: function() {
    $("body").css("visibility", "visible");
    cmd("visibility", "show", "");
  }
};

var uiscreens = {
};

var makescreen = function(screen) {
  if(screen.name === undefined) {
    throw Error("screen.name is unset");
  }
  uiscreens[screen.name] = screen;
}

$(
  function() {
    actions.makevisible()
    actions.start_location()
    $("#settings").click(actions.start_settings_activity);
  }
);
