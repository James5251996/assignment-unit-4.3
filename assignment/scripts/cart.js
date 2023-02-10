console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(string) {
    if (isFull) {
        item = basket.push(string);
        return true;
    } else if (isFull) {
        return false;
    };
};
console.log(addItem('fruit'));
console.log(basket);
console.log(addItem('basketballs'));
console.log(basket);
console.log(addItem('movies'));
console.log(basket);
addItem('dog');
addItem('cats')
addItem('food');

function listItems(array) {
    array = basket
    for (listIndex = 0; listIndex < basket.length; listIndex++) {
        console.log(array[listIndex]);
    } return basket;
};
listItems();

function empty(clear) {
    basket = [];
    return basket;
};
empty();
console.log(basket);

const maxItems = 5
function isFull(array) {
    if (basket.length < maxItems) {
        return false;
    } return true;
};

function removeItem (string) {
    if (basket.indexof(string) = string) {
        basket.splice();
        return string;
    } return null;
};
removeItem('food');