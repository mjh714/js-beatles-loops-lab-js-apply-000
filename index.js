// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
    var str = arrMusicians[i] + " plays " + arrInstruments[i];
    arr.push(str);
  }
  
  return arr;
}

function johnLennonFacts(array) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"
  ];
  var newFacts = [];
  
  var i = 0;
  
  while (i < facts.length) {
    var newStr = facts[i] + "!!!";
    
    newFacts.push(newStr);
    i++;
  }

  return newFacts;
 }
 
 function iLoveTheBeatles(x) {
  var array = [];
  do {
    x = array.push("I love the Beatles!");
    x++;
  } while (x < 15); {
    
  }
  return array;
}
 
 
 