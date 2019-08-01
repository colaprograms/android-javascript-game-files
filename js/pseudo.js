"use strict";

/* Make a pseudo-android class if we are running in the browser */

(function() {
  var make_pseudo = function() {
    window.android = {
      cmd: function(system, what, data) {
        return "error: no such system"
      },
      showexception: function(str) {
        $("body").append("Error: " + str)
      }
    }
  }

  if(window.android === undefined) {
    make_pseudo();
  }
})();
