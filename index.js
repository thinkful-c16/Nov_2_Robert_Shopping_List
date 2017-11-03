'use strict'
function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    console.log('made it here?');
  });
} 

$(addItem);