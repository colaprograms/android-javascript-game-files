"use strict";

window.addEventListener(
    "error",
    function(e) {
      if(window.android && window.android.showexception) {
        e.preventDefault();
        if(e.error) {
          android.showexception(e.error.stack)
        }
        else {
          android.showexception(`${e.message}\n File: ${e.filename}\n Line: ${e.lineo}\n Column: ${e.colno}`);
        }
      }
    },
    true
);
