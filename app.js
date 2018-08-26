// BUDGET CONTROLLER
var budgetCOntroller = (function () {

    var Expances = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItem: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0

        }
    }


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
        getDOMstrings: function () {
            return DOMstrings;
        }
    }


})()


// GLOBAL APP CONTROLLER
var controller = (function (budgetctrl, UIctrl) {

    var setupEventListener = function () {

        var DOM = UIcontroller.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (e) {

            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        })
    };


    var ctrlAddItem = function () {

        // 1. Get the field input data
        var input = UIcontroller.getinpt()

        console.log(input);


        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display yhe budget on the UI



    };

    return {
        init: function () {
            console.log('Aplication Started');
            setupEventListener();
        }
    };


})(budgetCOntroller, UIcontroller)


controller.init()








