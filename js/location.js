"use strict";

var getlocation = function() {
    var where = cmd("location", "get", "");
    return JSON.parse(where);
}

var wait_for_location_and_then_set = function() {
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

$(wait_for_location_and_then_set);