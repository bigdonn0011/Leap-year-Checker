let year = document.getElementById('checker');
const btn = document.getElementById('checkerBtn');
const msgBox = document.getElementById('msgBox');
const msgYes = document.querySelector('.msgYes');
const msgNo = document.querySelector('.msgNo');
let valu = year.value;
const p = document.getElementById('p')
const no = document.querySelector('.no');
const yes = document.querySelector('.yes');

function values() 
{
    
    const valu = year.value;
 if (valu %4 === 0){
  setTimeout(function() 
  {  
      msgYes.style.display = "block";
     msgBox.style.display = "block";
     p.innerText = "Checked Year: " + valu;
    console.log('Is Leap Year');
    yes.innerText = valu
      
  }
     
 
 , 10);}
    
else if (valu %4 !== 0){
    
setTimeout(function() 
  {  
      msgNo.style.display = "block";
     msgBox.style.display = "block";
     p.innerText = "Checked Year: " + valu;
    console.log('Not Leap Year');
    no.innerText = valu
      
  }
     
 
 , 10);
    }

else {
    console.log('bad news')}
};

