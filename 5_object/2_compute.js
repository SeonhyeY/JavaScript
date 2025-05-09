const obj = {
  name: 'Sarah',
  age: 18,
};
// Property access is statically determined at coding time
obj.name;
obj.age;

// To access properties dynamically, use bracket notation
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));

function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'student');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
