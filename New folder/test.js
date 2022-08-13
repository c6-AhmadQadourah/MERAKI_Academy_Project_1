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
li.style.display = "none";















but0.addEventListener("click", () => {
  li.style.display = "block";
  but0.style.display= 'none'

  let i = 0 ;
  let q = qustions1[i].qustion;
   let a = qustions1[i].answer
let c = qustions1[i].correctanswer

  li.append(q)

  for (let j = 0; j < a.length; j++) {
    const but1 = document.createElement("button");

    but1.innerText = a[j];
    but1.id = a[j];
    li.append(but1); 
  but1.className= 'but1'
  let butclass=  document.getElementsByClassName("butclass")
    but1.addEventListener('click' , () => {
      if ( but1.innerText == c ) {
        butclass.innerText = ''
        const next = document.createElement("button")
        next.innerText = 'Next'
        but1.style.backgroundColor= 'green'
        li.append(next) 
        

       
      }


      

    })
 
  }

 
 })


  
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