const body = document.querySelector('body');

const div1 = document.createElement( 'div');
div1.id= 'Div1';
const ul = document.createElement('lu')
const but1=document.createElement('button');
but1.innerText= 'Start '; 
but1.className = 'but1'
body.append( but1);
body.append(div1) ;
body.append(ul) 
const Qustions1 = [{ qustion1: ['What is Your Name'] , answer1: ['ahmad ' , 'abdulla' , 'anas ' ] } , {qustion2: [' How old Are You '] , answer2   : [, 30 , 60 , 120 , 1 ] }, {correctanswer:['ahmad' , 30 ] }] 

const li = document.createElement('li')

ul.append(li) 
 

const li1 = document.createElement('li')

ul.append(li1)
 
const but= () => {
    for (let i =0 ; i< Qustions1.length ; i++ ) {
        const but1 = document.createElement('button') 
but1.innerText =  Qustions1[i]
li1.append(but1) 
ul.append(li1)
    }
} 
but()
 




