const quizData = [
    {
        question: "Commonly used data types Do Not include",
        a: "settings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correct: "c"
    
    },
    {
        question: "The condition in an if/ else statement is  enclosed with________.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correct: "c"
    
    },
    {
        question: "Arrays in javascript can be used to store",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correct: "d"
    },
    {
        question: "String values must be enclosed within___ when being assigned to variables",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "c"
    
    },{
        question: "Avery useful tool used during the development and debugging for printing content to  the debugger is:",
        a: "javascript",
        b: "terminal/bash",
        c: "for loops",
        d: "console log",
        correct: "d"
    
    }

]

const quiz= document.getElementById('quiz')
const answerEls =document.querySelectorAll('.answer')
const quizEls =document.querySelector('.quiz-header')
const mainEls =document.querySelector('.fist-page')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const nextBtn = document.getElementById('next')
const time = document.getElementById('timer')
const score = document.getElementById('score')
const startbtn = document.getElementById('start')
const result = document.getElementById('result')
const initsection = document.getElementById('initsection')
const resulsection = document.getElementById('resulsection')
const sumBtn =document.getElementById('sumBtn')
const GoBtn = document.getElementById('GoBtn')
const ClearBtn = document.getElementById('ClearBtn')
const intpar = document.getElementById('intpar')
const input =  document.getElementById('input')
const resultinput =  document.getElementById('resultinput')


var currentQuiz = 0
var currntscore = 0
var timer = 60






function loadQuiz(){
 
    deselectAnswers()
    const currentQuizData =quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 loadQuiz()
 var intervalid

startbtn.addEventListener('click',function(e){
    e.preventDefault()
    timer=60;
    time.textContent=timer;
    intervalid=setInterval(() => {
        timer--
        time.textContent=timer;
        if(timer==0){
            scoredisplay()
        }


        
    }, 1000);
    
    mainEls.style.display= 'none';
    quizEls.style.display='block';
   
})
   


function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}


function getSelected() {
    var answer 
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}


       

nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            currntscore++
         result.textContent ="correct"

        } else {
            timer= timer-10;
            if(timer<=0){
                scoredisplay()
            }
            time.textContent=timer;

        result.textContent='wrong'
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else {
           scoredisplay()
        }
    }
})

function scoredisplay(){
    clearInterval(intervalid)
    quizEls.style.display='none';
    intpar.textContent= "your final score is :" + " " + currntscore
    initsection.style.display='block';
}

sumBtn.addEventListener('click', function(e){
    e.preventDefault()
    initsection.style.display='none';
    
    resulsection.style.display='block';
    var name = input.value;
    localStorage.setItem('name',name)
    localStorage.setItem('Highscore',currntscore)
    resultinput.value = "1." +""+name+'-'+currntscore
})

GoBtn.addEventListener('click', function(){
 
    mainEls.style.display= 'block';
    resulsection.style.display='none';

})

ClearBtn.addEventListener('click', function(){
    timer=0;
    currntscore=0;
    resultinput.value =" "
})