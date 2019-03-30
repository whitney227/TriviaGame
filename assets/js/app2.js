console.log("working")

//on keyevent for the start button and start function
$(".btn").on("click", function(){
    quiz.start();
    console.log("clock running")
})
var questionBank = [
    {
    question: "Hartsfield-Jackson Airport in Atlanta is the world's busiest airport.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Sounds Good"
    },

    {
    question: "France is the most visited country in the world.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Sounds Good"
    },

    {
    question: "Paris is the most visited city in the world.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "The US has the most number of lakes in the world.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "Switzerland is Europe's most mountainous country.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "Okinawa is a volcano in Hawaii.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "Brazil is South America's largest country.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Sounds Good"
    },

    {
    question: "Indonesia is made up of 25 islands.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "Lions are the deadliest animal in Africa.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },

    {
    question: "Timbuktu is an actual place in Australia.",
    choices: ["Sounds Good", "Not Likely"],
    answer: "Not Likely"
    },
];

var quiz ={
    correct: 0,
    incorrect: 0,
    counter: 10,

    //method to decrease the counter
    countdown: function(){
        $("#counter").html(quiz.counter);
        quiz.counter--;
        if (quiz.counter==0){
            quiz.score();
        }
    },

    //method to display the questions and show time quiz counter
    start: function(){
        timer=setInterval(quiz.countdown,1000);
        $("#questions").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>");
        $(".btn").remove();
        for(var i=0; i<questionBank.length; i++){
            $("#questions").append('<h4>' + questionBank[i].question + '</h4>');    
                for (var j=0; j<questionBank[i].choices.length; j++){
                    $("#questions").append('<input type="radio" name='+questionBank[i].question.choices[j]+' value='+j+'>')
                    console.log(j);
                    }

            }
        },

    //metbod will display the quiz results and stop the results
    score: function(){
        clearInterval(timer);
        $("#questions").empty();
        $("#questions").html("<h2>Your Score</h2>");
        
    //this will loop through each question to check the users input
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).type()== questionBank[0].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("true")
        });

        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).type() == questionBank[1].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("true")
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).type() == questionBank[2].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("false")
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).typel() == questionBank[3].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("false")
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).type() == questionBank[4].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("true")
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).type() == questionBank[5].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("false")
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).type() == questionBank[6].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("true")
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).type() == questionBank[7].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("false")
        });
        $.each($("input[name='question-8']:checked"), function(){
            if ($(this).type() == questionBank[8].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
            console.log("false")
        });
        $.each($("input[name='question-9']:checked"), function(){
            if ($(this).type() == questionBank[9].answer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            } 
            console.log("false")
        });
        
        $("#questions").append("<br> <h3>Correct Answers: " +quiz.correct+ "</h3>");
        $("#questions").append("<h3>Incorrect Answers: " +quiz.incorrect + "</h3>");
        $("#questions").append("<h3>Unanswered: "+(questionBank.length-(quiz.incorrect+quiz.correct))+"</h3>");
        
    },
    
    //restart the quiz
    
}

