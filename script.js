const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Once upon a time, there was a tortoise and the hare. Tortoise was friendly and quiet.",
    "When she saw that I had realized my mistake, she cooled down and then told me in a very kind manner.",
    "Studying is the main source of knowledge. Books are indeed never failing friends of man.",
    "Then I saw the most beautiful and colorful section of the exhibition i.e. the cultural section.",
    "A teacher is called builder of the nation. The profession of teaching needs men and women with qualities of head and heart.",
    "It is these qualities of head and heart that have endeared Miss Y to the students and teachers alike.",
    "Miss Y is a woman of great principles. She is jewel among all the teachers.",
    "We can derive benefit from other’s experiences with the help of books.",
    "This cracker caught fire and a very loud explosion was heard which shook my sister and me.",
]

const startBtn = document.getElementById('start-btn')
const inputField = document.getElementById('input-field')
const sentence = document.getElementById('sentence')
const score = document.getElementById('score')
const scoreContainer = document.getElementById('score-container')

let startTime
let endTime
let timeTaken

startBtn.addEventListener('click',()=>{
    inputField.removeAttribute('disabled')
    startBtn.setAttribute('disabled','true')
    inputField.focus()
    loadSentence()
    
    let date = new Date()
    startTime = date.getTime()
})

function loadSentence (){
    let randomIndex = Math.floor(Math.random()*sentences.length)
    sentence.innerHTML = sentences[randomIndex]
    
}


inputField.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){

        let date = new Date()
        
        endTime = date.getTime()

        if(sentence.innerText==e.target.value){

            calculateTypingSpeed(e.target.value)
            e.target.value=""

                       
        }else{
            score.innerHTML = "Please correct the sentence"
            setTimeout(()=>{
                score.innerHTML=""
            },1000)
        }
    }
})


function calculateTypingSpeed(inputText){
    let totalWords = inputText.split(" ").length;
    timeTaken = (endTime-startTime)/1000
    timeTaken = Math.round(timeTaken)

    let typingSpeed = (totalWords/timeTaken)*60
    typingSpeed = Math.round(typingSpeed)
    score.innerHTML = `Your typing speed is ${typingSpeed} words per minute`
    
    inputField.setAttribute('disabled','true')
    startBtn.removeAttribute('disabled')
    
    addScore(typingSpeed)


}

function addScore(speed){
    let li = document.createElement('li')
    li.innerHTML = `${speed}`
    scoreContainer.appendChild(li)
}

