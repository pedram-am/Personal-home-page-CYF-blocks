var fruits, emojis;


fruits = ['apple','kiwi', 'banana', 'cherry','pineapple','watermelone'];
emojis = ['🍎','🥝', '🍌', '🍒','🍍','🍉'];
let element_list = document.getElementById('list');
while (!!fruits.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  new_li.innerText = fruits.shift();
  let new_span = document.createElement('span');
  new_span.innerText = emojis.shift();

  new_li.appendChild(new_span);

  element_list.appendChild(new_li);
}


function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


let element_list1 = document.getElementById('list1');
element_list1.replaceChildren();


document.getElementById('button').addEventListener('click', (event) => {
  let element_list12 = document.getElementById('list1');
  let new_ol = document.createElement('ol');
  new_ol.innerText = document.getElementById('input').value;

  element_list12.appendChild(new_ol);

});
