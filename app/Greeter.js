export default function(name) {
  var greet = document.createElement('div');
  greet.textContent = 'Hi there: ' + name;
  console.log(greet)
  return greet;
};