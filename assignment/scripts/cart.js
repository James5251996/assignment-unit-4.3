console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem (string) {
    item = basket.push(string);
    return true;
};
console.log(addItem('fruit'));
console.log(basket);
console.log(addItem('basketballs'));
console.log(basket);
console.log(addItem('movies'));
console.log(basket);

function listItems (array) {
     array = basket
    for (listIndex = 0; listIndex<basket.length; listIndex++) {
        console.log(array[listIndex]);
    } return basket;
};
listItems();

function empty (clear) {
    basket = [];
    return basket;
};
empty();
console.log(basket);

