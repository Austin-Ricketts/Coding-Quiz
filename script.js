var timeEl = document.querySelector(".time");
var qSet = document.querySelector(".qSet");
var postList = document.querySelector("#answer-options");
var verdict = document.querySelector(".verdict");
var startBtn = document.querySelector(".start-button");
var transition = document.querySelector(".next-q");
var scoreBtn = document.querySelector(".score");
var timePost = document.querySelector(".time-post");


var list1 = ["HTML", "CSS", "Javascript", "JQuery"];
var list2 = ["Mandarin", "German", "Javascript", "Esperanto"];
var list3 = ["Nokia", "Verizon", "Landline", "Function"];
var list4 = ["Pig Latin", "Aileaghan", "CSS", "Klingon"];
var list5 = ["a Hydrofoil",  "a Web browser", "an O'Neill board", "a Ripcurl board"];

var correct = "Correct!";
var wrong = "Wrong!";
var secondsLeft = 60;

var starter = document.createElement("button");
starter.textContent = "Start Game";
startBtn.appendChild(starter);

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
  if (element.matches("button") === true) {
      console.log();
      return (setTime() + renderList1());
      }
});


function renderList1() {
    
    qSet.innerHTML = "1. Which language is used to create the basic architecture of a webpage?";
    postList.innerHTML = "";

    var nextQ = document.createElement("button");
    nextQ.textContent = "Next Question";
    transition.appendChild(nextQ);
    
  
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
    postList.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      
        
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
              secondsLeft -= 2;
              return verdict.innerHTML = wrong;
          }
          
        }
        
      });
      
      transition.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      if (element.matches("button") === true) {
          console.log();
          return renderList2();
          }
    });
      
  }
  
  

  function renderList2() {
    
    qSet.innerHTML = "2. Which language is capable of making dynamic, asynchronous code on a webpage?";
    postList.innerHTML = "";

    transition.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      if (element.matches("button") === true) {
          console.log();
          return renderList3();
          }
    });
    
  
    // Render a new li for each question
    for (var i = 0; i < list2.length; i++) {
      var answer2 = list2[i];
  
      var li = document.createElement("li");
      li.textContent = answer2;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Submit";
  
      li.appendChild(button);
      postList.appendChild(li);
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
          if (number === 2) {
             return verdict.innerHTML = correct; 
          }
          
          if (number === 0 || 1 || 3) {
            secondsLeft -= 2;
            return verdict.innerHTML = wrong;
          }
          //execute renderList2 function here.
        }
      });
}
  function renderList3() {
    
    qSet.innerHTML = "3. This feature of Javascript is most often associated with a callback.";
    postList.innerHTML = "";
    
    transition.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      if (element.matches("button") === true) {
          console.log();
          return renderList4();
          }
    });
  
    // Render a new li for each question
    for (var i = 0; i < list3.length; i++) {
      var answer3 = list3[i];
  
      var li = document.createElement("li");
      li.textContent = answer3;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Submit";
  
      li.appendChild(button);
      postList.appendChild(li);
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
          if (number === 3) {
             return verdict.innerHTML = correct; 
          }
          
          if (number === 0 || 1 || 2) {
            secondsLeft -= 2;
            return verdict.innerHTML = wrong;
          }
          
        }
      });
}
  function renderList4() {
    
    qSet.innerHTML = "4. Front End Developers will often use this basic language to style a page.";
    postList.innerHTML = "";

    transition.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      if (element.matches("button") === true) {
          console.log();
          return renderList5();
          }
    });
    
  
    // Render a new li for each question
    for (var i = 0; i < list4.length; i++) {
      var answer4 = list4[i];
  
      var li = document.createElement("li");
      li.textContent = answer4;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Submit";
  
      li.appendChild(button);
      postList.appendChild(li);
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
          if (number === 2) {
             return verdict.innerHTML = correct; 
          }
          
          if (number === 0 || 1 || 3) {
            secondsLeft -= 2;
            return verdict.innerHTML = wrong;
          }
          
        }
      });
}
  function renderList5() {
    
    qSet.innerHTML = "5. The easiest way for most Users to surf the web would be to use...";
    postList.innerHTML = "";

    
    
  
    // Render a new li for each question
    for (var i = 0; i < list5.length; i++) {
      var answer5 = list5[i];
  
      var li = document.createElement("li");
      li.textContent = answer5;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Submit";
  
      li.appendChild(button);
      postList.appendChild(li);
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
          if (number === 1) {
             return verdict.innerHTML = correct; 
          }
          
          if (number === 0 || 2 || 3) {
            secondsLeft -= 2;
            return verdict.innerHTML = wrong;
          }
          
        }
      });
}

var score = document.createElement("button");
    score.textContent = "Push to Score";
    scoreBtn.appendChild(score);

    scoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var element = event.target;
      /*if (element.matches("button") === true) {
          console.log();
          return stopTime();
          }*/
        
    });
  

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
      console.log(secondsLeft);
      if(secondsLeft === 0 || -0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

/*function stopTime() {
    clearInterval(timerInterval);
    console.log(secondsLeft);
    timePost.innerHTML = secondsLeft;
}*/

