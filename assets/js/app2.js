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
    inncorrect: 0,
    counter: 3,

    //method to decrease the counter
    countdown: function(){
        $("#counter").html(quiz.counter);
        quiz.counter--;
        if (quiz.counter==0){
            quiz.end();
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
                $("#questions").append('<input type="radio" name="question-'+i+'" value=" '+questionBank[i].choices[j]+' ">' +questionBank[i].choices[j])
            }
        }
    },
    //this method clears the questions and replaces it with the score
    end: function(){
        clearInterval(timer);
        $("#questions").empty();
        $("#questions").html("<h2>Your Score</h2>");
        $("#questions").append("<br> <h3>Correct Answers: " +quiz.correct+ "</h3>");
        $("#questions").append("<h3>Incorrect Answers: " +quiz.incorrect + "</h3>");
        $("#questions").append("<h3>Unanswered: "+(questionBank.length-(quiz.incorrect+quiz.correct))+"</h3>");
        
        //this loop will check the users input on each question
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questionBank[0].answer){
                quiz.correct++;
            } else{
                quiz.incorrect++;
            }
            console.log("true")
        });

        $.each($('input[name="question-1]":checked'), function(){
            if($(this).val()==questionBank[1].answer){
                quiz.correct++;
            } else{
                quiz.incorrect++;
            }
            console.log("true")
        });

        $.each($('input[name="question-2]":checked'), function(){
            if($(this).val()==questionBank[2].answer){
                quiz.correct++;
            } else{
                quiz.incorrect++;
            }
            console.log("false")
        });

    }
}
