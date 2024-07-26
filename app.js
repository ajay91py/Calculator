let previousValue='';
let currentValue='';
let operator='';
document-addEventListener('DOMContentLoaded', ()=>{
   let numbers=document.querySelectorAll('.number');
   let operators=document.querySelectorAll('.operator')
   let previousNumber=document.querySelector('.previous')
   let currentNumber=document.querySelector('.current')

   let equal=document.querySelector('.equal')
   let decimal=document.querySelector('.decimal')
   let clear=document.querySelector('.clear')

   numbers.forEach((btn)=> btn.addEventListener('click', (e)=>{getNumbers(e.target.textContent)}))
   operators.forEach((op)=> op.addEventListener('click', (e)=>{getOperator(e.target.textContent)}))
   equal.addEventListener('click', ()=>{result(previousValue,operator,currentValue)})
   
   function getNumbers(x){
      currentValue+=x;
      currentNumber.textContent=currentValue;
   }

   function getOperator(y){
      operator+=y;
      console.log(operator);
      previousValue=currentValue;
      if(!previousNumber.textContent.includes('+','-','*','/'))
      previousNumber.textContent=previousValue+' '+operator;
      currentValue='';
   }
function result(a,op,b) {
   console.log('equal is clicked');
    a=Number(previousValue)
    b=Number(currentValue)
   switch(op){
      case '+':
         previousNumber.textContent=a+b;
         currentNumber.textContent=''
         break;
         case '-':
            previousNumber.textContent=a-b;
            currentNumber.textContent=''
            break;
            case '*':
            previousNumber.textContent=a*b;
            currentNumber.textContent=''
            break;
            case '/':
            previousNumber.textContent=a/b;
            currentNumber.textContent=' '
            break;
}

}
})

