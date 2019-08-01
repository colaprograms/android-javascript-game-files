"use strict";

$(function() {
    // start location system
    android.cmd("location", "start", "")

    $("#settings").click(
        function() {
            android.cmd("settingsactivity", "start", "");
        }
    );
});
