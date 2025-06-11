// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color, size } }) {
  console.log(color);
}
changeColor(prop);
