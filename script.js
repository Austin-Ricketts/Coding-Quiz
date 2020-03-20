var timeEl = document.querySelector(".time");
var qSet = document.querySelector(".qSet");
var postList = document.querySelector("#answer-options");
var verdict = document.querySelector(".verdict");

var list1 = ["HTML", "CSS", "Javascript", "JQuery"];
var list2 = ["Mandarin", "German", "Javascript", "Esperanto"];
var list3 = ["Nokia", "Verizon", "Landline", "Function"];
var list4 = ["Pig Latin", "Aileaghan", "CSS", "Klingon"];
var list5 = ["Hydrofoil", "O'Neill board", "Web browser", "Ripcurl board"];

var correct = "Correct!";
var wrong = "Wrong!";
var secondsLeft = 60;

renderList1();
setTime();
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
  postList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value
      var index = element.parentElement.getAttribute("data-index");
      parseInt(index);
      console.log(index);
      console.log(parseInt(index));
      var number = parseInt(index);
      if (number === 0) {
         return verdict.innerHTML = correct; 
      }
      
      if (number === 1 || 2 || 3) {
          return verdict.innerHTML = wrong;
      }
      //execute renderList2 function here.
    }
  });

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

