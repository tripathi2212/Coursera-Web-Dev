(function (window) {


var names = ["stark", "hulk", "doctor", "thor", "panther", "widow", "antman", "spiderman", "captain", "thanos"];

for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);