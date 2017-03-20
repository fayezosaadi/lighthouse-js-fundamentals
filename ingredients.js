var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < 8) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (var n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var x = ingredients.length-1; x >=0 ; x--) {
  console.log(ingredients[x]);
}
