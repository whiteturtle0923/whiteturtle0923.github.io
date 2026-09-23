const date = new Date();
const seed = date.getFullYear() * date.getMonth() + date.getDate();

const random = new Math.seedrandom(Math.random());
//const random = new Math.seedrandom(seed);
const intLimit = 2147483647;
const maxRoot = 15;
let root1 = Math.min(Math.round(random.int32()/(intLimit/maxRoot)), maxRoot);
while (root1 === 0) {
  root1 = Math.min(Math.round(random.int32()/(intLimit/maxRoot)), maxRoot);
}
let root2 = Math.min(Math.round(random.int32()/(intLimit/maxRoot)), maxRoot);
while (root2 === 0 || root2 === root1) {
  root2 = Math.min(Math.round(random.int32()/(intLimit/maxRoot)), maxRoot);
}
let dilation = Math.min(Math.round(random.int32()/(intLimit/5)), 5);
while (dilation === 0) {
  dilation = Math.min(Math.round(random.int32()/(intLimit/5)), 5);
}
//dilation = 21
const a = dilation;
const b = -(root1 + root2) * dilation;
const c = root1 * root2 * dilation;
console.log(root1, root2, dilation);
console.log(a, b, c);
console.log(-b/(2 * a) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)/(2 * a));
console.log(-b/(2 * a) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)/(2 * a));


const equation = `\\[${Math.sign(a) === 1 ? "" : "-"}${Math.abs(a) === 1 ? "" : Math.abs(a)}x^2 ${Math.sign(b) === 1 ? "+" : "-"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x ${Math.sign(c) === 1 ? "+" : "-"} ${Math.abs(c)} = 0;  x \\in \\mathbb{Z} \\cap ([-15, 0) \\cup (0, 15])) \\]`;
const description = "\\[\\text{Currently, all roots are integers where } x \\in\\]"

document.getElementById("math-thing").innerHTML = equation;
//document.getElementById("description").innerHTML = description;

function checkAnswer() {
  const answer1 = parseInt(document.getElementById("answer1").value);
  const answer2 = parseInt(document.getElementById("answer2").value);
  console.log(answer1, answer2);
  if (isNaN(answer1) || isNaN(answer2)) {
    alert("why are we typing text its a root of a quadratic its a number\noh wait this also shows if its empty in that case please type something in thanks");
  }
  const smallerRoot = Math.min(root1, root2);
  const largerRoot = Math.max(root1, root2);
  if (answer1 === smallerRoot && answer2 === largerRoot) {
    alert("right answer");
  } else if ((Math.abs(answer1) > 15 || Math.abs(answer2) > 15)) {
    alert("no are you stupid the roots cant be greater than 15 or less than -15");
  }
  else {
    alert("wrong answer");
  }
}
//console.log(document.getElementById("math-thing"))