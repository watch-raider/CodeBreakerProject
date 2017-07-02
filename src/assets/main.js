let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }


    if(!validateInput(input.value)){
      return;
    } else {
      attempt.value++;

      if (getResults(input.value)){
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
      } else if (attempt.value >= 10){
        setMessage('You Lose! :(')
        showAnswer(true);
        showReplay();
      } else {
        setMessage('Incorrect, try again.');
       }
    }
};

//implement new functions here

function setHiddenFields() {
  attempt.value = 0;
  answer.value = Math.floor(Math.random() * 10000).toString();
  // will put 0 in front of number if less than 4 digits
  while(answer.value.length < 4){
    answer.value = '0' + answer.value;
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
    return false;
  }
}

function getResults(input) {
  var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (i = 0; i < input.length; i++) {
    if(input.charAt(i) == answer.value.charAt(i)){
      html += `<span class="glyphicon glyphicon-ok"></span>`;
    } else if(answer.value.indexOf(input.charAt(i)) > -1) {
      html += `<span class="glyphicon glyphicon-transfer"></span>`;
    } else {
      html += `<span class="glyphicon glyphicon-remove"></span>`
    }
  }
  html += '<div></div>';
  document.getElementById('results').innerHTML += html;


  if(input == answer.value){
    return true;

  }
  return false;
}

function showAnswer(success){
  var code = document.getElementById('code') ;
  if (success){
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
  code.innerHTML = answer.value;
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
