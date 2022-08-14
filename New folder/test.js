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

const qustions1 = [
  {
    qustion: "What is Your Name",
    answer: ["ahmad ", "abdulla", "anas", " mohammad"],
    correctanswer: "ahmad",
  },
  {
    qustion: " How old Are You ",
    answer: ["30", "60", "120", "1"],
    correctanswer: "30",
  },
];

const li = document.createElement("li");
ul.append(li);

li.append(container);
li.append(qustionsdiv);
li.append(answersdiv);
li.append(score);
const li2 = document.createElement("li");
li.style.display = "none";
container.append(qustionsdiv);
container.append(answersdiv);

start.addEventListener("click", () => {
  li.style.display = "block";
  start.style.display = "none";

  let i = 0;
  let q = qustions1[i].qustion;
  let a = qustions1[i].answer;
  let c = qustions1[i].correctanswer;

  const p1 = document.createElement("p");
  p1.append(q);

  qustionsdiv.append(p1);

  for (let j = 0; j < a.length; j++) {
    const but1 = document.createElement("button");

    but1.innerText = a[j];
    but1.id = a[j];
    answersdiv.append(but1);
    i++

   

    but1.addEventListener("click", (e) => {
      if (but1.innerText == c) {
        const next = document.createElement("button");
        next.innerText = "Next";
        but1.style.backgroundColor = "red";
        li.append(next);
        container.append(next);

        next.addEventListener("click", (e) => {
          qustionsdiv.style.display = "none";
          answersdiv.style.display = "none";
          next.style.display = "none";

          q = qustions1[1].qustion; // mosh dynamic
          a = qustions1[i].answer[j];

          p1.innerHTML = "";
          p1.append(q);
          qustionsdiv.append(p1);
          console.log(qustions1[1].qustion);
          qustionsdiv.style.display = "block";
          answersdiv.style.display = "block";

          

          for (let j = 0; j < a.length; j++) {
            answersdiv.innerHTML = "";
            
          }
        });
      }
    });
  }
});

/*

 qustions1.forEach((elem, i) => {
   const p = document.createElement("p");

   let out = document.createElement("output");
   let aa = elem.qustion;
   out.append(elem.qustion);
   out.id = elem.qustion[i];

   console.log(out);

   p.append(out);

   li.append(p);

   for (let j = 0; j < elem.answer.length; j++) {
     const but1 = document.createElement("button");

     but1.innerText = elem.answer[j];
     but1.id = elem.answer[j];
     li.append(but1);
     ul.append(li);
     div1.append(li);
   }
 })
})
*/

/*
  butnext->{
    i++
    q = qustions1[i]
    answers
    -loop  answers
          display answer

  }
*/

/*
const but = () => {
  qustions1.forEach(function (elem, i) {
    const p = document.createElement("p");

    let out = document.createElement("output");
    let aa = elem.qustion;
    out.append(elem.qustion);
    out.id = elem.qustion[i];

    console.log(out);

    p.append(out);

    li.append(p);

    for (let j = 0; j < elem.answer.length; j++) {
      const but1 = document.createElement("button");

      but1.innerText = elem.answer[j];
      but1.id = elem.answer[j];
      li.append(but1);
      ul.append(li);
      div1.append(li);

      but1.className = "but1";

      but1.addEventListener("click", (e) => {
        console.log(e.path[0].id);
        if (elem.correctanswer == e.target.outerText) {
          console.log(e);
          const buttonId = document.getElementById(`${e.path[0].id}`);

          buttonId.style.backgroundColor = "green";
          const butnext = document.createElement("button");
          ul.append(butnext);
          butnext.innerText = "NEXT Qustion";
          butnext.addEventListener("click", (e) => {
            but1.innerText = " ";
            j++;
            but1.style.display = "block";
          });
        }
      });
    }
  });
};

but();
*/
