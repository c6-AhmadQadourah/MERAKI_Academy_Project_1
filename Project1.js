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
const Qustions1 = { Qustions : ['What is Your Name' , ' How old Are You '] , Answers  : ['ahmad ' , 'abdulla' , 'anas ', 30 , 60 , 120 , 1 ] } 

const li = document.createElement('li')
li.append([Qustions1.Qustions[0]]) 
ul.append(li) 
 

const li1 = document.createElement('li')
li1.append([Qustions1.Qustions[1]]) 
ul.append(li1)
 
const but= () => {
    for (const key in Qustions1 ) {
        const but1 = document.createElement('button') 
but1.innerText =  [Qustions1.Qustions[]] 
li1.append(but1) 
ul.append(li1)
    }
} 
but()
 