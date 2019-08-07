"use strict";

var filelist = [
  "utilities.js",
  "location.js"
]

var run_when_done = [];

window.$ondone = function(fn) {
  run_when_done.push(fn);
}

var file_error_function_generator = function(filename) {
  return function(jqXHR, textStatus, errorThrown) {
    console.log("Error loading file", filename);
    console.log("jqXHR =", jqXHR);
    console.log("textStatus =", textStatus);
    console.log("errorThrown =", errorThrown)
  }
};

(function() {
  var counter = 0;
  window.$done = function() {
    counter += 1;
    if(counter == filelist.length) {
      run_when_done.forEach(function(fn) { fn(); });
    }
  };
})();

filelist.forEach(function(file, index) {
  $.ajax({
    url: "js/" + file,
    dataType: "script",
    cache: true,
    error: file_error_function_generator(file)
  })
});
