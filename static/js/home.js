console.log("Hello");

//var age = prompt("What is your age?");
//document.getElementById("sometext").innerHTML = age;

//Numbers in JS
var num1 = 5.7;
console.log(5 * 10);

//var name = prompt("What is your name?");
//function
function greeting(name) {
  var result = "Hello " + name;
  console.log(result);
}
greeting(name);

//while loops
/*
var num = 0;
while (num < 10) {
  num++;
  console.log(num);
}

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*let fruit = "banana";
let morefurits = "banana\napple";
console.log(morefurits);

console.log(fruit.length);
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(""));
*/

//Array
let fruit = ["banana", "apple", "orange", "pineapple"];
fruit = new Array("banana", "apple", "orange", "pineapple");

console.log(fruit[2]);
fruit[0] = "pear";
console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

//array common methods
console.log("To String ", fruit.toString());
console.log(fruit.join("-"));
console.log(fruit.pop(), fruit);
console.log(fruit.push("blackberries"), fruit);
fruit[fruit.length] = "Grapes";
console.log(fruit);
//fruit.shift                                   //removes the first element of an array
//fruit unshift                                  // add first element to array

let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruit.concat(vegetables);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); //sorting in assending order

//sorting numbers in assending order
let someNumber = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(
  someNumber.sort(function (a, b) {
    return b - a;
  })
);
//sorting numbers in dessending order
console.log(
  someNumber.sort(function (a, b) {
    return b - a;
  })
);

let emptyArray = [];
for (let i = 0; i < 10; i++) {
  emptyArray.push(i);
}
console.log(emptyArray);

let student = {
  first: "Alem",
  last: "Russom",
  age: 34,
  height: 184,
  studentInfo: function () {
    return this.first + "\n" + this.last
  }
};
//console.log(student.first);
//console.log(student.last)
//student.first = "Not Alem"      //To change the value of first to "Not Alem"
//console.log(student.first);
student.age++;                    //This increments the age value by 1
console.log(student.studentInfo())
