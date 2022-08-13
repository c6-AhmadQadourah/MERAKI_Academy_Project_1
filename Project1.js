const body = document.querySelector("body");

const div1 = document.createElement("div");
div1.id = "Div1";

const div2 = document.createElement("div");
const ul = document.createElement("ul");
const but0 = document.createElement("button");
but0.innerText = "Start ";
but0.className = "but0";
body.append(but0);
body.append(div1);
body.append(div2);
body.append(ul);

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

const li2 = document.createElement("li");
li.style.display='none'

but0.addEventListener('click' , () => {
  li.style.display = 'block'
})

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

    but1.className =  'but1'
    
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
            
            but1.innerText= ' '
            j++
            but1.style.display='block'
          });
        }
      });
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

/*

else if (i === 0) {
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
  */

/*
  const but = () => {
    Qustions1.forEach(function (elem, i) {
      const p = document.createElement("p");
      if (Qustions1.length === i) {
        console.log(Qustions1[i]);
        let aa = Qustions1[i].qustion;
        p.append(aa);
        li.append(p);
  
        for (let j = 0; j < 4; j++) {
          const but1 = document.createElement("button");
          but1.innerText = Qustions1[i].answer[j];
          but1.id = "but1";
          li.append(but1);
          ul.append(li);
          div1.append(li);
          but1.addEventListener("click", () => {
            if (Qustions1[i].correctanswer[j] === but1.innerText) {
              document.getElementById("but1").style.backgroundColor = "#ff0000 ";
              console.log(true);
              const butnext = document.createElement("button");
              ul.append(butnext);
              butnext.innerText = "NEXT Qustion";
            }
          });
        }
      }
    });
  };

  */
