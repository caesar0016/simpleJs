//THis is the initialization
var confirmAge = document.getElementById("inputAge");
var less100 = document.getElementById("input100");
var loop30 = document.getElementById("print30");
var loop40 = document.getElementById("print40");
var loop4010 = document.getElementById("print4010");

confirmAge.addEventListener("click", function(){

  var age = prompt("Enter Age:");

  if(age >= 25){
    alert("Wow you're older than 25 already");
  }else if(age < 25){
    alert("24 below still young");
  }else{
    alert("Invalid Input");
  }
});

less100.addEventListener("click", function(){

  var inputNumber = prompt("Enter Number: ");

  if(inputNumber <= 100){
    alert("The number you input is less than 100");
  }else if(inputNumber >= 100){
    alert("The number you input is greater than 100");
  }else{
    alert("Invalid Input");
  }
});

loop30.addEventListener("click", function(){

  for (let i = 0; i <= 30; i++) {
    console.log(i);
  }

});
loop40.addEventListener("click", function(){

  for (let i = 2; i <= 40; i+= 2) {
    console.log(i);
  }


});
loop4010.addEventListener("click", function(){
  
  for (let i = 40; i >= 10; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }

});