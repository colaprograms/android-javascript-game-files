"use strict";

var getlocation = function() {
    var where = cmd("location", "get", "");
    return JSON.parse(where);
}

$(
  function() {
    cmd("location", "start", "");
    var set_where = function(s) { $("#location").html(s); }
    var loop = function() {
      var where = getlocation();
      if(where !== null) {
        set_where(where);
        return;
      }
      setTimeout(loop, 100);
    }
    loop()
  }
);
