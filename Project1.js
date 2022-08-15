const body = document.querySelector("body");

const div1 = document.createElement("div");
div1.id = "Div1";

const div2 = document.createElement("div");
const ul = document.createElement("ul");
const start = document.createElement("button");
start.innerText = "Start ";
start.className = "start";
body.append(start);
body.append(div1);
body.append(div2);
body.append(ul);

const container = document.createElement("div");
container.className = "container";
const score = document.createElement("div");
score.className = "score";
const qustionsdiv = document.createElement("div");
qustionsdiv.className = "Qdiv";
const answersdiv = document.createElement("div");
answersdiv.className = "Adiv";

const nextdiv = document.createElement("div");
nextdiv.className = "next";
container.append(nextdiv);

const timerp = document.createElement("p");

timerp.id = "timer";

const timer = (timeleft = 60);
let downloadTimer = setInterval(function () {
  timeleft--;
  document.getElementById("timer").textContent = "Time Left " + timeleft;
  if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);

const scor = [];
const final = document.createElement("p");
final.className = "score";
final.innerText = [];

const qustions1 = [
  {
    qustion: "What is  The first Letter in English ? ",
    answer: ["A", "G", "J", "Z"],
    correctanswer: "A",
  },
  {
    qustion: " What is The latest Iphone model ? ",
    answer: ["14", "13", "12", "11"],
    correctanswer: "14",
  },
  {
    qustion: "  What is the capital of jordan ? ",
    answer: ["Amman", " Irbid", "Aqaba", "Zarqa"],
    correctanswer: "Amman",
  },
  {
    qustion: "  What is the Best  fast food meal ? ",
    answer: ["Shawarma", " Broasted", "Burger", "Falafel"],
    correctanswer: "Broasted",
  },
  {
    qustion: "  Who is the richest person in the world? ",
    answer: ["Jeff Bezos", " Bill Gates", "Elon Musk", "Mohammad Jouza"],
    correctanswer: "Elon Musk",
  },
];

const li = document.createElement("li");
ul.append(li);

li.append(container);
li.append(qustionsdiv);
li.append(answersdiv);

const li2 = document.createElement("li");
li.style.display = "none";
container.append(qustionsdiv);
container.append(answersdiv);
const next = document.createElement("button");
next.className = "next";
let i = 0;
console.log(i);

const p1 = document.createElement("p");

start.addEventListener("click", () => {
  li.style.display = "block";
  start.style.display = "none";

  body.append(timerp);
});
let q = qustions1;
const Quiz = () => {
  console.log(i);

  let q = qustions1[i].qustion;
  let a = qustions1[i].answer;
  let c = qustions1[i].correctanswer;
  p1.append(q);

  qustionsdiv.append(p1);

  for (let j = 0; j < a.length; j++) {
    const but1 = document.createElement("button");

    but1.innerText = qustions1[i].answer[j];
    but1.id = qustions1[i].answer[j];
    answersdiv.append(but1);

    but1.className = "but1";

    but1.addEventListener("click", (e) => {
      //but1.disabled = true

      but1.innerText === true;
      next.innerText = "Next";
      but1.style.backgroundColor = "red";

      li.append(next);
      // nextdiv.append(next);
      container.append(next);

      if (but1.innerText == c[j]) {
        pa = 5;
        scor.push(pa);
      }
    });
  }
};

Quiz();

next.addEventListener("click", () => {
  i++;
  answersdiv.innerText = "";
  p1.innerHTML = "";
 
  Quiz();

  let butclass = document.querySelectorAll(".but1");

  if (i === qustions1.length - 1) {
    next.style.display = "none ";

    const finish = document.createElement("button");
    finish.innerHTML = "Finish";
    li.append(finish);
    container.append(finish);

    finish.addEventListener("click", () => {
      final.innerText = ` Your Score is
  ${scor}  / ${q.length} `;
      score.append(final);

      container.append(final);
    });
  }
});
