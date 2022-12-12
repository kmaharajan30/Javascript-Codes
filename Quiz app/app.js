const quizDb =[
    {
        question: "Q1: what is your Name?",
        a:"Mano",
        b:"Mani",
        c:"man",
        d:"maxi",
        ans:"ans1"
    },
    {
        question: "Q2: what is your Full Name?",
        a:"Mano",
        b:"Maharajan",
        c:"Maxwell",
        d:"maximum",
        ans:"ans2"
    },
    {
        question: "Q3: what is your Last Name?",
        a:"Mano",
        b:"K",
        c:"man",
        d:"maxi",
        ans:"ans2"
    },
    {
        question: "Q4: what is your Name?",
        a:"Mano",
        b:"Mani",
        c:"man",
        d:"maxi",
        ans:"ans1"
    }
];

const question = document.getElementById('question');
const answers = document.querySelectorAll('.ans');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const submit = document.getElementById('submit');
const showScore = document.querySelector('.scoreArea')

let questionCount = 0;
let score = 0;
const loadQuestion =()=>{
    let questionList = quizDb[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer =()=>{
    let answer;
    answers.forEach((currEle)=>{
        if(currEle.checked){
            answer=currEle.id;
        }
    });
    return answer;
}
const deselectAll = ()=>{
    answers.forEach((currEle)=> currEle.checked=false );
};

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer===quizDb[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDb.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`<h3>You Scored ${score}/${quizDb.length} </h3>
        <button class ="btn" onclick = "location.reload()">Play Again!</button>`;
        showScore.style.display = 'block';
        

    }

});