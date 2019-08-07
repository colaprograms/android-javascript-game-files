"use strict";

var filelist = [
  "utilities.js location.js",
  "mapscreen/map.js"
]

filelist = Array.prototype.concat.apply(
  [],
  filelist.map(
    (it) => it.split(/\s+/)
              .filter((it) => it !== "")
  )
)

var file_error_function_generator = function(filename) {
  return function(jqXHR, textStatus, errorThrown) {
    console.log("Error loading file", filename);
    console.log("jqXHR =", jqXHR);
    console.log("textStatus =", textStatus);
    console.log("errorThrown =", errorThrown)
  }
};

filelist.forEach(function(file, index) {
  $.ajax({
    url: "js/" + file,
    dataType: "script",
    cache: true,
    error: file_error_function_generator(file)
  })
});
