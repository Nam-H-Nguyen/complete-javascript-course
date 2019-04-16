var UIController = (function() {

  return {
    getInput: function() {

      return {
        type: document.querySelector('.add__type').value, // Will be (+) income or (-) expenses
        description: document.querySelector('.add__type').value,
        value: document.querySelector('.add__type').value
      }
    }
  }
});

var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
      // 1. Get the field input data
      var input = UICtrl.getInput();
      console.log(input);
      // 2. Add the item to the budget controller
      // 3. Add the item to the UI
      // 4. Calculate the budget
      // 5. Display the budget on the UI
    }
}(BudgetController, UIController));
