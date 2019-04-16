var budgetController = (function() {

})();

/**
 * Selects the elements in the DOM and returns the selectors
 * @return {[]} [type, description, value] a collection of user input
 */
var UIController = (function() {
  // Instead of hardcoding in DOM selectors, with DOMstrings object, you can simply
  // make one change and the rest of the code base will reflect the name change
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }


  return {
    getInput: function() {

      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be (+) income or (-) expenses
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    // Calling this method would expose the DOMstrings to the public
    // Now other controllers can have access to the DOMstrings
    getDOMstrings: function() {
      return DOMstrings;
    }
  }
});

var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
      // 1. Get the field input data
      var input = UICtrl.getInput();
      console.log(input);
      // 2. Add the item to the budget controller
      // 3. Add the item to the UI
      // 4. Calculate the budget
      // 5. Display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.querySelector('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });


})(budgetController, UIController);
