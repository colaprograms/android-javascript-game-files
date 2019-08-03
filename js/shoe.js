"use strict";

var cmd = function(system, what, data) {
    let response = android.cmd(system, what, data);
    if(response.substring(0, 6) == "done: ") {
        return response.substring(6);
    }
    else if(response.substring(0, 7) == "error: ") {
        throw Error(response.substring(7));
    }
    else {
        throw Error("invalid command response: " + response);
    }
}

var settings = function() {
    cmd("settingsactivity", "start", "");
}

var startgame = function() {
    var startlocation = function() { cmd("location", "start", ""); }
    var makevisible = function() { cmd("visibility", "show", ""); }   
    startlocation();
    makevisible();
    $(".text").click(settings);
}

$(startgame);