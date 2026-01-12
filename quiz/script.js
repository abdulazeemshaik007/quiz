var questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "None"],
        answer: 0
    },
    {
        q: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        q: "Which is a scripting language?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    }
];

var index = 0;
var score = 0;

function loadQuestion() {
    document.getElementById("question").innerHTML = questions[index].q;
    document.getElementById("op1").innerHTML = questions[index].options[0];
    document.getElementById("op2").innerHTML = questions[index].options[1];
    document.getElementById("op3").innerHTML = questions[index].options[2];
    document.getElementById("op4").innerHTML = questions[index].options[3];
}

function nextQuestion() {
    var selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer");
        return;
    }

    var selectedIndex = Array.from(document.getElementsByName("option")).indexOf(selected);

    if (selectedIndex === questions[index].answer) {
        score++;
    }

    selected.checked = false;
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").style.display = "none";
        document.getElementById("result").innerHTML =
            "Quiz Completed! Your Score: " + score + "/" + questions.length;
    }
}

loadQuestion();
