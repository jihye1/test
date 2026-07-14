function CWE_identical(x) {
  const arr = [1, 2, 3];
  if (x > 0) {
    arr[x] = 3;
  } else {
    arr[x] = 3;
}

function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
  const arr = [1, 2, 3];
  if (x < 0) {
    arr[x] = 3;
  }
}

function CWE_489_569_570_571() { // CONSTANT_CONDITION
  const x = "Fo";
  const y = x + "Bar";
  if (y === "FooBar") {
    console.log('Do something');
  }
}
