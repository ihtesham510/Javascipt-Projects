let total = 0;


function random() {
  let num = Math.floor(Math.random() * 11);
  document.getElementById("num").innerText = num;
    

  let equl = document.getElementById("total");  // creating a variable to short the code. LOL.
  total += num; // will add the previous value and number generated.
  equl.innerText = total;       // this will change the inner text to the total amount

    
  let a = document.getElementById("id");    // creating a variable to short the code. LOL.

    
  function odd() {                          // if called this will change the text to "Number id odd".
    a.innerText = "Number is odd.";
  }
  function even() {                         // if called this will change the text to "Number is even".
    a.innerText = "Number is even.";
  }
    
    
  if (num % 2 == 0)  {  // if the number is even
    even();         // the even fuction will be called.
  } else {  // if not 
    odd();          // then odd fuction will be called.
  }
}
