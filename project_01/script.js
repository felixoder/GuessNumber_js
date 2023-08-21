//generating the random number

let number = Math.floor(Math.random() * 101)
console.log(number);
let chance=0;

let btn = document.getElementById('btn');
let box2 = document.getElementById('box2');

let box1 = document.getElementById('box1');
function displayInputText() {
    
   value = box1.value;
    if (number !=value) {
        if (number >value) {
        //    lappu= console.log('the number is greater than your value!');
            box2.innerHTML="the number is greater than your value!"
        
        }
        if (number <value) {
            box2.innerHTML='the number is lesser than your value!'
        }

        chance++;
    }
    else{
        box2.innerHTML=`You won and your score is  ${100-chance}
       and  The number is `+number;
        
        
    }



    


}