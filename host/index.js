const something = 5;
function calc(a = 10, b = 5) {
  return a * b;
}

function write(msg) {
  $.writeln(msg);
}

write(`Hello World ${calc()} ${something}`);
