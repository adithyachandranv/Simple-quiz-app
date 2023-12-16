var question = document.getElementById('question-container');
var answers = document.getElementById('answer-list');
var submit = document.getElementById('submit');

var score = 0;

first();
function first() {
  question.innerHTML = "What is the capital of India?";
  answers.innerHTML = `
    <label>
      <input type="radio" name="question" id="correct" class="options"class="options">Delhi
    </label><br>
<label>
      <input type="radio" name="question" class="options">Mumbai
    </label><br>
<label>
      <input type="radio" name="question" class="options">Chennai
    </label><br>
<label>
      <input type="radio" name="question" class="options">Goa
    </label><br>
    
  `;

  submit.addEventListener('click', function () {
    if (document.getElementById('correct').checked) {
      score++;
    }
    second();
  });
}

function second() {
  question.innerHTML = "Who are world cup 2022 champions?";
  answers.innerHTML = `
    <label>
      <input type="radio" name="question"  class="options">France
    </label><br>
<label>
      <input type="radio" name="question" class="options">Croatia
    </label><br>
<label>
      <input type="radio" name="question" class="options">Brazil
    </label><br>
<label>
      <input type="radio" name="question" class="options" id="correct">Argentina
    </label><br>
    
  `;
  submit.addEventListener('click', function () {
    if (document.getElementById('correct').checked) {
      score++;
    }
    third();
  });
}




function third() {
  question.innerHTML = "Where is Kerala?";
  answers.innerHTML = `
    <label>
      <input type="radio" name="question" class="options">USA
    </label><br>
<label>
      <input type="radio" name="question" id="correct" class="options">India
    </label><br>
<label>
      <input type="radio" name="question" class="options" >Korea
    </label><br>
<label>
      <input type="radio" name="question" class="options">China
    </label><br>
  `;
  submit.addEventListener('click', function () {
    if (document.getElementById('correct').checked) {
      score++;
    }
    final();
  });
}

function final() {
  question.innerHTML = "Your score is"
  answers.innerHTML = score;
  submit.value = "Retry";
  submit.addEventListener('click', function refresh() {
    location.reload(true);
  })
}