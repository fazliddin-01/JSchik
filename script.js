var name = prompt("ismingizni kiriting");

while (name.length === 0) {
  var name = prompt("ismingizni kiriting");
}
console.log("ismim " + name);

var age = prompt("yoshingizni yozing");
var yosh = "yoshingizni yozing";
var notogri = "yoshingizni raqamda yozing";

while(!!isNaN(age)){
    var age = prompt(notogri)
}

var age = prompt(yosh);
while (!!isNaN(age) || age.length === 0) {
  var age = prompt(notogri);
}

console.log("mening yoshim " + age + " yoshda");

var age = prompt('yoshingizni yozing')



var masala1 = prompt("misolni yeching: 5+4=?");

while (!!isNaN(masala1) || masala1.length === 0) {
  masala1 = prompt("iltimos son kiriting: 5+4=?");
}
if (masala1 == 9) console.log("javobingiz togri " + masala1);
else console.log("javobingiz xato " + masala1 + "; to'g'ri javob: 9");


var masala2 = prompt("misolni yeching: 8*8=?");
while (!!isNaN(masala2) || masala2.length === 0) {
    masala2 = prompt("iltimos son kiriting: 8*8=?");
  }
if (masala2 == 64) {
  console.log("javobingiz togri " + masala2);
} else console.log("javobingiz xato " + masala2 + "; to'g'ri javob: 64");


var masala3 = prompt("misolni yechin: 9*5=?");
while (!!isNaN(masala3) || masala3.length === 0) {
    masala3 = prompt("iltimos son kiriting: 9*5=?");
  }
if (masala3 == 45) {
  console.log("javobingiz togri ") + masala3;
} else console.log("javobingiz xato " + masala3 + "; to'g'ri javob: 45");



var masala4 = prompt("misolni yeching: 5*5=?");

while (!!isNaN(masala4) || masala4.length === 0) {
    masala4 = prompt("iltimos son kiriting: 5*5=?");
  }

if (masala4 == 25) {
  console.log("javobingiz togri " + masala4);
} else console.log("javobingiz xato " + masala4 + "; to'g'ri javob: 25");


alert("javoblaringizni console da korishingiz mumkin");