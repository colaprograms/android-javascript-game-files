"use strict";

/* Make a pseudo-android class if we are running in the browser */

var pseudolocation = {
    latitude: 3,
    longitude: 4
};

(function() {
  var make_pseudo = function() {
    $("body").addClass("pretendphone")
    window.android = {
      cmd: function(system, what, data) {
        if(system == "location") {
            if(what == "get") {
                return `done: {"latitude": ${pseudolocation.latitude}, "longitude": ${pseudolocation.longitude}}`;
            }
            else if(what == "start") {
                return "done: started";
            }
        }
        if(system == "visibility" && what == "show") {
            $("body").css("visibility", "visible");
            return "done: shown";
        }
        if(system == "settingsactivity" && what == "start") {
            return "error: settings unavailable";
        }
        return `error: pseudo doesn't know about cmd(${system}, ${what}, ${data})`;
      },
      showexception: function(str) {
        $("body").append("<pre>" + str + "</pre>")
      }
    }
  }

  if(window.android === undefined) {
    make_pseudo();
  }
})();
