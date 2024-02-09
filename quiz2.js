const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of Himachal Pradesh?",
	a: [{ text: "Shimla", isCorrect: true, isSelected: false },
	{ text: "Kangra", isCorrect: false },
	{ text: "Dharmshala", isCorrect: false },
	{ text: "Bilaspur", isCorrect: false }
	]

},
{
	q: "What is the capital of Gujarat",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Gandhinagar", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

},
{
	q:"Which river is considered the lifeline of India?",
	a:[{text: "Brahmputra",isCorrect: false},
	{text: "Krishna",isCorrect:false},
	{text: "Ganga",isCorrect:true},
	{text: "Yamuna",isCorrect:false}
]
},
{
	q:"Who is known as the “Father of the Indian Constitution”?",
	a:[{text: "B. R. Ambedkar",isCorrect: true},
	{text: "Mahatma Gandhi",isCorrect:false},
	{text: "Jawaharlal Nehru",isCorrect:false},
	{text: "Sardar Vallabhbhai Patel",isCorrect:false}
]
}


]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}