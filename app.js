// BUDGET CONTROLLER
var budgetCOntroller = (function () {


})()


// UI CONTROLLER
var UIcontroller = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinpt: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value, //Two type (inc or exp)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }

        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }


})()


// GLOBAL APP CONTROLLER
var controller = (function (budgetctrl, UIctrl) {

    var DOM = UIcontroller.getDOMstrings();

    var ctrlAddItem = function () {
        // 1. Get the field input data
        var input = UIcontroller.getinpt()

        console.log(input);


        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display yhe budget on the UI



    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function (e) {

        if (e.keyCode === 13 || e.which === 13) {


            ctrlAddItem();


        }



    })


})(budgetCOntroller, UIcontroller)



















