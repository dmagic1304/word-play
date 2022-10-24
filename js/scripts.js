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

  filterArray.reverse();  
  let output = filterArray.join(' ');
  console.log(output)

  let p = document.createElement('p');
  p.append(output);
  document.body.append(p);
}

window.addEventListener('load', function(){ 
  document.querySelector('form').addEventListener('submit', handleSubmit);
})