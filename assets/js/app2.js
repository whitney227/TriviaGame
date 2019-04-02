console.log("working")

//on keyevent for the start button and start function
$(".btn").on("click", function(){
    quiz.start();
    console.log("clock running")
})

var questionBank = [
    {
    question: "Hartsfield-Jackson Airport in Atlanta is the world's busiest airport.",
    choices: ["True", "False"],
    answer: "True"
    },

    {
    question: "France is the most visited country in the world.",
    choices: ["True", "False"],
    answer: "True",
    },

    {
    question: "Paris is the most visited city in the world.",
    choices: ["True", "False"],
    answer: "False"
    },

    {
    question: "The US has the most number of lakes in the world.",
    choices: ["True", "False"],
    answer: "False"
    },

    {
    question: "Switzerland is Europe's most mountainous country.",
    choices: ["True", "False"],
    answer: "True"
    },

    {
    question: "Okinawa is a volcano in Hawaii.",
    choices: ["True", "False"],
    answer: "False"
    },

    {
    question: "Brazil is South America's largest country.",
    choices: ["True", "False"],
    answer: "True"
    },

    {
    question: "Indonesia is made up of 25 islands.",
    choices: ["True", "False"],
    answer: "False"
    },

    {
    question: "Lions are the deadliest animal in Africa.",
    choices: ["True", "False"],
    answer: "False"
    },

    {
    question: "Timbuktu is an actual place in Australia.",
    choices: ["True", "False"],
    answer: "False"
    },
];

var quiz ={
    correct: 0,
    incorrect: 0,
    unanswered: 10,
    counter: 60,
  

    //method to decrease the counter
    countdown: function(){
        quiz.counter--;
        $("#counter").html(quiz.counter);
        if (quiz.counter<=0){
            quiz.done();
            quiz.result();
        }
    },

    //method to display the questions and show time quiz counter
    start: function(){
        timer=setInterval(quiz.countdown,1000);
        $("#questions").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>");
        $(".btn").hide();
        for(var i=0; i<questionBank.length; i++){
            $("#questions").append('<h4>' + questionBank[i].question + '</h4>');    
                for (var j=0; j<questionBank[i].choices.length; j++){
                    $("#questions").append("<input type='radio' name='userChoice- "+[i]+"' value='"+questionBank[i].choices[j]+"'>" +questionBank[i].choices[j])
                    console.log(j);
                    }
            }
        },

    //method to check the input for each question
    done: function(){

        if($('input[name=userChoice-0]:checked').val()===questionBank[0].answer){
            quiz.correct++;
            quiz.unanswered--;

        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q1")
        
        if($('input[name=userChoice-1]:checked').val()===questionBank[1].answer){
            quiz.correct++;
            quiz.unanswered--;

        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q2")

        if($('input[name=userChoice-2]:checked').val()===questionBank[2].answer){
            quiz.correct++;
            quiz.unanswered--;

        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q3")

        if($('input[name=userChoice-3]:checked').val()===questionBank[3].answer){
            quiz.correct++;
            quiz.unanswered--;

        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q4")

        if($('input[name=userChoice-4]:checked').val()===questionBank[4].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q5")

        if($('input[name=userChoice-5]:checked').val()===questionBank[5].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q6")    
    
        if($('input[name=userChoice-6]:checked').val()===questionBank[6].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q7")

        if($('input[name=userChoice-7]:checked').val()===questionBank[7].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q8")

        if($('input[name=userChoice-8]:checked').val()===questionBank[8].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q9")

        if($('input[name=userChoice-9]:checked').val()===questionBank[9].answer){
            quiz.correct++;
            quiz.unanswered--;
    
        } else {
            quiz.incorrect++;
            quiz.unanswered--;
        }
            console.log("Q10")
    },
    
    result: function(){
        clearInterval(timer);
        $("#questions h2").remove();
        $("#questions").html("<h2>Your Score</h2>");
        $("#questions").append("<h3>Correct Answers: " +quiz.correct+ "</h3>");
        $("#questions").append("<h3>Incorrect Answers: " +quiz.incorrect+ "</h3>");
        $("#questions").append("<h3>Unanswered: " +quiz.unanswered+ "</h3>"); 
    },   
}


           
            

