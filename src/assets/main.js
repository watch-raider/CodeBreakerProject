let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer || attempt == '') {
      setHiddenFields();
    }
    if(!validateInput(input.value)){
      return false;
    } else {
      attempt = attempt + 1;
    }
};

//implement new functions here

function setHiddenFields() {
  attempt.value = 0;
  answer = Math.floor((Math.random() * 10000) + 1);
  answer = answer.toString();
  var zero = 0;
  zero = zero.toString();
  // will put 0 in front of number if less than 4 digits
  while(answer.length < 4){
    answer = zero + answer;
  }
};

function setMessage(label) {
  document.getElementById("message").innerHTML = label;
}

function validateInput(value) {
  if(value.length == 4){
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false
    console.log('wrong');
  }
}

function getResults(degree) {

}
