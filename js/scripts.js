function handleSubmit(event) {
  event.preventDefault();
  const inputSentence = document.getElementById('sentence').value;
  const inputString = inputSentence.split(' ');
  console.log(inputString[0].length);

  let filterArray = [];

  inputString.forEach(function(word) {
    if(word.length >= 3) {
      filterArray.push(word);
    }
  })  

  console.log(filterArray)
}

window.addEventListener('load', function(){ 
  document.querySelector('form').addEventListener('submit', handleSubmit);
})