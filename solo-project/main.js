var squares =$('.square');
var mole =$('.mole')
var time =$('#time');
var score = $('#score');

var counter = 0; // counter for the score
var startTime = 10; // counter for the time 



var randomMole = function  (){
    squares.each(function(){ // loop through each square class
        squares.removeClass('mole');// each time removing the mole class
    })
    var newdiv =squares[Math.floor(Math.random()*9)]// each time adding a random class mole
    newdiv.classList.add('mole');  // to every square class
}


setInterval(function(){ 
    randomMole()
    $('.mole').on("click",function(){// every time when clicking on the class mole
        counter++   // incremant the counter 
        console.log(this)
        console.log(counter)
        score.text(counter) // showing the score 
    })
},600);

function timeLeft (){
    startTime--        // count down
    console.log(startTime)
    time.text(startTime) // showing  the count down
    if (startTime == 0){ // condition to stop the game
          
        alert('times up, your score is '+' '+ counter);
    }
}
setInterval(timeLeft,1000); // run the timeLeft every 1s