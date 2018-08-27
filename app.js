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
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0

        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allitems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expances(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into the data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;


        },
        testing: function () {
            console.log(data);

        }
    };


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
        var input, newItem,

        // 1. Get the field input data
        input = UIcontroller.getinpt();

        // 2. Add item to the budget controller

        newItem = budgetctrl.addItem(input.type, input.description, input.value)

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








