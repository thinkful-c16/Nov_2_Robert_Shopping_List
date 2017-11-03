'use strict'
function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let newItem = $(this).find('input[name="shopping-list-entry"]').val();
    $(this).find('input[name="shopping-list-entry"]').val('');
    $("ul").append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>  <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  });
} 

function toggleItem() {
  $('.shopping-item-toggle').click(function(event) {
    <!-- event.stopPropagation(); -->
    console.log('word');
  });
}

function deleteItem() {
  $('.shopping-item-delete').click(function(event) {
    event.stopPropagation();
    $(this).remove();
  });
}

$(addItem);
$(toggleItem);
$(deleteItem);

<!-- shopping-list, li, shopping-item-controls, --> 