// object which will have array of quizzes with question and four answers and correct answer

const quizData = [
  {
    question: "How many times did Liz Taylor marry?",
    a: "5",
    b: "A gazillion",
    c: "8",
    d: "Who cares?",
    correct: "c"
  }, {
    question: "How much does you mum weigh?",
    a: "She's so fat she's got her own gravitational pull",
    b: "4.5 kg",
    c: "Pure light has no weight 🫶",
    d: "I was born from a jackal",
    correct: "c"
  }, {
    question: "According to Americans, what is the capital of Brazil?",
    a: "Rio de Janeiro",
    b: "Buenos Aires",
    c: "What is Brazil? Isn't it in Africa?",
    d: "A mixture of the above",
    correct: "d"
  }, {
    question: "What is the greatest band of all time?",
    a: "King Crimson",
    b: "My band from high school. We did death metal covers of early Daiana Ross",
    c: "Ivo Papasov's Bulgarian Wedding Band",
    d: "I only listen to algorithmic music. That's why I'm single",
    correct: "a"
  }, {
    question: "Who wants to live forever?",
    a: "No one",
    b: "Everyone",
    c: "Connor MacLeod of the clan MacLeod",
    d: "🎶Ooooo-oooo-ooooo🎶",
    correct: "d"
  }
]

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  currentQuestion++
}
