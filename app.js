//declaring a variable to generate alphabets
let alphabets = "ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let resultMessage = document.getElementById('resultmessage');
//first the result message place will be 
resultMessage.innerText="";

let captcha;

//generate function for onclick function
generate =()=>{
   let one = alphabets[Math.floor(Math.random() * alphabets.length)];
   let two = Math.floor(Math.random()*10);//limit 10 because to get upto 9
   let three= Math.floor(Math.random()*10);
   let four= alphabets[Math.floor(Math.random() * alphabets.length)];
   let five = alphabets[Math.floor(Math.random() * alphabets.length)];
   let six = Math.floor(Math.random()*10);
   captcha = one.toString()+two.toString()+three.toString()+four.toString()+five.toString()+six.toString();
   //console.log(captcha);
   document.getElementById('firstinput').value=captcha;
   document.getElementById('entercaptcha').value = '';
   resultMessage.innerHTML="";
}   

// check function for onclick function
check =()=>{
    let uservalue = document.getElementById('entercaptcha').value;
    if(uservalue == captcha){
        resultMessage.innerHTML="correct!"
    }else{
        resultMessage.innerHTML="try Again!"
        document.getElementById('entercaptcha').value="";
    }
}