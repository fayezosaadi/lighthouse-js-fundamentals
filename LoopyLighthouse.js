//Loopy Lighthouse2 Assignment

function loopyLighthouse(range, multiples, words){
  for (var i = range[0]; i <= range[1]; i++) {
    if((i % multiples[0] === 0) && (i % multiples[1] === 0))
    { console.log(words[0] + words[1]); }
    else if(i % multiples[0] === 0)
    { console.log(words[0]); }
    else if(i % multiples[1] === 0)
    { console.log(words[1]); }
    else { console.log(i); }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



//Loopy Lighthouse Assignment
//Sloutuion 1
/*var numbers= 100;
for(var i=0; i<=100; i++)
{
if(numbers % 3 === 0 && numbers % 4 === 0)
  console.log("Loopy Lighthouse");
else if(numbers % 3 === 0)
  console.log("Loopy");
else if(numbers % 4 === 0)
  console.log("Lighthouse");
else {console.log(numbers);}
numbers+=1
}*/


//Sloutuion 1
/*for (var numbers = 100; numbers <= 200; numbers++) {
if(numbers % 3 === 0 && numbers % 4 === 0)
  console.log("Loopy Lighthouse");
else if(numbers % 3 === 0)
  console.log("Loopy");
else if(numbers % 4 === 0)
  console.log("Lighthouse");
else {console.log(numbers);}
}*/

//Sloutuion 1
/*for (var numbers = 100; numbers <= 200; numbers++){
  if (numbers % 3 === 0 && numbers % 4 === 0){
    console.log("LoopyLighthouse");
  }
  else if (numbers % 3 === 0){
    console.log("Loopy");
  }
  else if (numbers % 4 === 0){
    console.log("Lighthouse");
  }
  else{
    console.log(numbers);
  }
}*/




