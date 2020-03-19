var timeEl = document.querySelector(".time");
var qSet = document.querySelector(".qSet");
var postList = document.querySelector("#answer-options");

var list1 = ["HTML", "CSS", "Javascript", "JQuery"];
var list2 = ["Mandarin", "German", "Javascript", "Esperanto"];
var list3 = ["Nokia", "Verizon", "Landline", "Function"];
var list4 = ["Pig Latin", "Aileaghan", "CSS", "Klingon"];
var list5 = ["Hydrofoil", "O'Neill board", "Web browser", "Ripcurl board"];

var correct = "Correct!";
var wrong = "Wrong!";
var secondsLeft = 60;

function renderList1() {
    
    qSet.innerHTML = "1. Which language is used to create the basic architecture of a webpage?";
    postList.innerHTML = "";
    
  
    // Render a new li for each question
    for (var i = 0; i < list1.length; i++) {
      var answer1 = list1[i];
  
      var li = document.createElement("li");
      li.textContent = answer1;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Submit";
  
      li.appendChild(button);
      postList.appendChild(li);
    }
  }
renderList1();

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

setTime();