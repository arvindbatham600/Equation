function submitHandler() {
  event.preventDefault();
  let attempt = 3;
  let value =  document.getElementById('value').value
  let check;

  const checkNumber = () => {
      if(value == 5 ){
          check = true
      }


      else{
          attempt = attempt - 1
          while(attempt >= 1){
            if(check){
                break;
            }
            else{
                alert(`only ${attempt} attempt left`)
                value =  prompt("Enter the Correct Value")
                checkNumber();
            }
            
          }
          
         
      }
  }

    checkNumber();
    if(check){
        alert("You Won")
    }
    else{
        alert("You Lose")
    }
        

}
