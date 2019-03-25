//This code will start the questions
$(".btn btn-primary btn-lg").on('click', function(){
    clock.start();
    console.log("clock running")
});

var questionBank = [
    {
    question: "Hartsfield-Jackson Airport in Atlanta is the world's busiest airport.",
    choices: ["true", "false"],
    answer: "true"
    },

    {
    question: "France is the most visited country in the world.",
    choices: ["true", "false"],
    answer: "true"
    },

    {
    question: "Paris is the most visited city in the world.",
    choices: ["true", "false"],
    answer: "false"
    },

    {
    question: "The US has the most number of lakes in the world.",
    choices: ["true", "false"],
    answer: "false"
    },

    {
    question: "Switzerland is Europe's most mountainous country.",
    choices: ["true", "false"],
    answer: "true"
    },

    {
    question: "Okinawa is a volcano in Hawaii.",
    choices: ["true", "false"],
    answer: "false"
    },

    {
    question: "Brazil is South America's largest country.",
    choices: ["true", "false"],
    answer: "true"
    },

    {
    question: "Indonesia is made up of 25 islands.",
    choices: ["true", "false"],
    answer: "false"
    },

    {
    question: "Lions are the deadliest animal in Africa.",
    choices: ["true", "false"],
    answer: "false"
    },

    {
    question: "Timbuktu is an actual place in Australia.",
    choices: ["true", "false"],
    answer: "false"
    },
];

//variable with objects and methods to run and stop time then display score
var clock = { 
    correct: 0,
    incorrect: 0,
    counter: 20,
   
    //this method decreases the the time and calls the results when reaches zero
    countdown:  function(){
        clock.counter--;
        $("#counter").html(clock.counter);
        if (clock.counter ==0){
            clock.done();   
        }
    },
    //this method shows the time remaining in the HTML and displays the questions as input
    start: function() {
        timer = setInterval(clock.countdown,1000);
        $("#questions").prepend("<h2>Time Remaining:  <span id='counter'>60</span> Seconds</h2>");
        $(".btn btn-primary btn-lg").remove();
        for (var i=0; i<questionBank.length; i++){
        $("#questions").append("<h4>" + questionBank[i].question + "</h4>");
            for (var j=0; j<questionBank[i].choices.length; j++){
                $("#questions").append("<input type = 'radio' name='question-"+i+" 'value' "+questionBank[i].choices[j]+" '>"+questions[i].choices[j])
                }
        }
    },

    //this method will stop the clock and clear the questions
    done: function () {
        clearInterval(timer);
        $("#questions h2").remove();
    //this code will clear the questions and display the final score
    $("#questions").html("<h2>Your Score</h2>");
    $("#questions").append("<br> <h3>Correct Answers: " +clocl.correct+ "</h3>");
    $("#questions").append("<h3>Incorrect Answers: " +clock.incorrect + "</h3>");
    $("#questions").append("<h3>Unanswered: "+(questionBank.length-(clock.incorrect+clock.correct))+"</h3>");
    
    //this code adds the reset button
    $("#questions").append("<br> <button type='button' class='btn btn-primary'>Reset</button>")
        
    //This code resets the quiz
    
    }
};


