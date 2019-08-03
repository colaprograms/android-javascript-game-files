"use strict";

window.addEventListener(
    "error",
    function(e) {
      if(window.android && window.android.showexception) {
        console.log(e);
        for(var property in e) {
            console.log(`${property}: ${e[property]}`);
        }
        //console.log(e);
        e.preventDefault();
        if(e.error) {
          android.showexception(`${e.message}\n File: ${e.filename}\n Line: ${e.lineno}\n Column: ${e.colno}\nStack:\n${e.error.stack}`);
        }
    },
    true
);
