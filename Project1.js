const body = document.querySelector("body");

const div1 = document.createElement("div");
div1.id = "Div1";

const div2 = document.createElement("div");
const ul = document.createElement("ul");
const but1 = document.createElement("button");
but1.innerText = "Start ";
but1.className = "but1";
body.append(but1);
body.append(div1);
body.append(div2)
body.append(ul);

const Qustions1 = [
  {
    qustion1: "What is Your Name",
    answer1: ["ahmad ", "abdulla", "anas ", " mohammad"],
  },
  { qustion2: " How old Are You ", answer2: ["30", "60", "120", "1 "] },
  { correctanswer: ["ahmad", '30'] },
];

// li contains  Q2 + answers + formula for Q2 
const Q1 = Qustions1[0].qustion1;
console.log(Q1);
div2.append(Q1);

const Q2 = Qustions1[1].qustion2;
console.log(Q2);

const li = document.createElement("li");
li.append(Q2);
ul.append(li);

const li2 = document.createElement("li");

const A1 = Qustions1[0].answer1
console.log(A1)

 const container = []
body.append(container)

const but = () => {
  for (let i = 0; i < 4; i++) {
    const but1 = document.createElement("button");
    but1.innerText = Qustions1[1].answer2[i];
    li.append(but1);
    ul.append(li);
    div1.append(li);
    but1.addEventListener('click' ,()=> { 
    if ( Qustions1[2].correctanswer[1] === but1.innerText )
    console.log(true)
 })
 
    }
  }
;

but();





const but11= () => {
    for (let i =0 ; i< 4 ; i++ ) {
        const but2 = document.createElement('button') 
but2.innerText =  A1[i];
but2.className = 'but2'
li2.append(but2) 
ul.append(li2)
div2.append(li2)
but2.addEventListener('click' ,()=> { 
    if ( Qustions1[2].correctanswer[0] === but2.innerText )
    console.log(true)
 })
 
    }
} 
but11()


 


