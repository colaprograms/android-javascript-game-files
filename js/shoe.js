"use strict";

$(function() {
    // start location system
    android.cmd("location", "start", "")
    setTimeout(
        function() { android.cmd("visibility", "show", "") },
        100
    )

    $("#settings").click(
        function() {
            android.cmd("settingsactivity", "start", "");
        }
    );
});
