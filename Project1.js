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
body.append(div2);
body.append(ul);

const Qustions1 = [
  {
    qustion: "What is Your Name",
    answer: ["ahmad ", "abdulla", "anas ", " mohammad"],
  },
  { qustion: " How old Are You ", answer: ["30", "60", "120", "1 "] },
  { correctanswer: ["ahmad", "30"] },
];

const li = document.createElement("li");
ul.append(li);

const li2 = document.createElement("li");

const but = () => {
  Qustions1.forEach(function (elem, i) {
    const p = document.createElement("p");
    if (i === 1) {
      console.log(Qustions1[1]);
      let aa = Qustions1[1].qustion;
      p.append(aa);
      li.append(p);

      for (let i = 0; i < 4; i++) {
        const but1 = document.createElement("button");
        but1.innerText = Qustions1[1].answer[i];

        li.append(but1);

        ul.append(li);
        div1.append(li);
        but1.addEventListener("click", () => {
          if (Qustions1[2].correctanswer[1] === but1.innerText)
            console.log(true);
          const butnext = document.createElement("button");
          ul.append(butnext);
          butnext.innerText = "NEXT Qustion";
        
        

        });
      }
    } else if (i === 0) {
      console.log(Qustions1[0]);
      let aa = Qustions1[0].qustion;
      p.append(aa);
      li.append(p);

      for (let i = 0; i < 4; i++) {
        const but1 = document.createElement("button");
        but1.innerText = Qustions1[0].answer[i];

        li.append(but1);

        ul.append(li);
        div1.append(li);
        but1.addEventListener("click", () => {
          if (Qustions1[2].correctanswer[0] === but1.innerText)
            console.log(true);
        });
      }
    }
  });
};
but();

/*

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


 

*/
