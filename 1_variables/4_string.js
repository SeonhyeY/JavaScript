// String
let string = 'Hello';
string = `Hello!`;
console.log(string); // 'Hello!'

// How to print special characters (Escape Expressions)
string = "'Hello!'";
console.log(string); // 'Hello!'

string = 'Hello \nThis is Seonhye! \t\t My name is \\\u09AC';
console.log(string);

// Template Literal
let id = 'Mary';
let greetings = 'Hello!, ' + id + '🤚\nHave a nice day!';
console.log(greetings);

greetings = `Hello, ${id}🤚
Have a nice day!`;
console.log(greetings);
