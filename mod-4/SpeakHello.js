var helloSpeaker = new Object();

(function (window){
  var speakWord = "Hello";
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;
}
)(window);