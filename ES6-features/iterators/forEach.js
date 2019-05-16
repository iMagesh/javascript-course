var obj = { first: "John", last: "Doe" };

Object.keys(obj).forEach(function(key) {
  console.log(key, obj[key]);
});

fruits = ["apple", "mango"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

fruits.forEach(fruit => {
  console.log(fruit);
});
