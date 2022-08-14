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

const scor = document.createElement("p");

scor.innerText = "Score ";
score.append(scor);

const qustions1 = [
  {
    qustion: "What is  The first Letter in English",
    answer: ["A", "G", "J", "Z"],
    correctanswer: "A",
  },
  {
    qustion: " What is The latest Ipone model ",
    answer: ["14", "13", "12", "11"],
    correctanswer: "14",
  },
  {
    qustion: "  What is the capital of jordan ",
    answer: ["Amman", " Irbid", "Aqaba", "Zarqa"],
    correctanswer: "Amman",
  },
];

const li = document.createElement("li");
ul.append(li);

li.append(container);
li.append(qustionsdiv);
li.append(answersdiv);
container.append(score);
const li2 = document.createElement("li");
li.style.display = "none";
container.append(qustionsdiv);
container.append(answersdiv);
const next = document.createElement("button");
let i = 0;
console.log(i);

const p1 = document.createElement("p");

start.addEventListener("click", () => {
  li.style.display = "block";
  start.style.display = "none"; 

});

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

      but1.addEventListener("click", () => {
        if (but1.innerText == c[j]) {
          next.innerText = "Next";
          but1.style.backgroundColor = "red";
          li.append(next);
          nextdiv.append(next);
          container.append(nextdiv);
        }
      });
    }
 
};

Quiz();

next.addEventListener("click", () => {
  i++;
  console.log(i);
  const uu = document.querySelector("p");
  answersdiv.innerText = "";
p1.innerHTML = "";

  Quiz();

  let butclass = document.querySelectorAll(".but1");
});

if (i === qustions1.length - 1) {
  next.style.display = "none ";

  const finish = document.createElement("button");
  finish.innerHTML = "Finish";
  li.append(finish);
  container.append(finish);
}
