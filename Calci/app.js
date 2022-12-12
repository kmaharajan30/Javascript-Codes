let string = '';
let input=document.querySelector('input');
let buttons = document.querySelectorAll('button');
for(element of buttons){
    element.addEventListener('click',(evaluate)=>{
        let buttonText = evaluate.target.innerText;
        if(buttonText=='='){
            string=eval(string);
            input.value=string;
        }
        else if(buttonText=='X'){
            buttonText='*';
            string+=buttonText; //This is for x change
            input.value=string;
            


        }
        else if(buttonText=='C'){
            string='';
            // document.querySelector('input').value=string;
            input.value=string;
        }
        else{
            string=string+buttonText;
            // document.querySelector('input').value=string;
            input.value=string;
        }
        
    });
}
