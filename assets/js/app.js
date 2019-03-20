$(document).ready(function() {

//This code will start the questions
$(".btn").on("click", function(){
    $(".btn").remove();
    for (var i=0; i<questions.length; i++){
        $("#questions").append("<h4>" + questions[i].question + "</h4>");
        for (var j=0; j<questions[i].choices.length; j++){
            $("#questions").append("<input type = 'radio' name='question-"+i+" 'value' "+questions[i].choices[j]+" '>"+questions[i].choices[j])
        }
    }
});

//variable with questions in an array
var questions = [
    {
    question: "Hartsfield-Jackson Airport in Atlanta is the world's busiest airport.",
    choices: ["true", "false"],
    correctAnswer: "true",
    },

    {
    question: "France is the most visited country in the world.",
    choices: ["true", "false"],
    correctAnswer: "true",
    },

    {
    question: "Paris is the most visited city in the world.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },

    {
    question: "The US has the most number of lakes in the world.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },

    {
    question: "Switzerland is Europe's most mountainous country.",
    choices: ["true", "false"],
    correctAnswer: "true",
    },

    {
    question: "Okinawa is a volcano in Hawaii.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },

    {
    question: "Brazil is South America's largest country.",
    choices: ["true", "false"],
    correctAnswer: "true"
    },

    {
    question: "Indonesia is made up of 25 islands.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },

    {
    question: "Lions are the deadliest animal in Africa.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },

    {
    question: "Timbuktu is an actual place in Australia.",
    choices: ["true", "false"],
    correctAnswer: "false",
    },
];


});
