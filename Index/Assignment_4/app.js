const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    const buttons = question.querySelector(".question-button");
    console.log(buttons);
    buttons.addEventListener("click",function(){
        questions.forEach( function(event){
            if(event!==question){
                event.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});