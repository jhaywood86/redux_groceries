// Establish DOM elements as variables

//const grocerySubmit = document.getElementById('addGrocery')
//const list = document.getElementById('list')
//const clearBtn = document.getElementById('clear')

// Instantiate default state value:
const list = document.querySelector('#list')
const input = document.querySelector('#newItem')
const submitBtn = document.querySelector('#addGrocery')
const clearBtn = document.querySelector('#clear')

// Set up Redux Store -------------------------------------
const initialState = {
    groceries: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'list/add':
            return{groceries: [...state.groceries, action.newItem]}
        case 'list/clear':
            return{groceries: []}

        default:
            return state;
    }
}

let store = Redux.createStore(reducer);

const addItem = ()=> {
    let newItem = { text: input.value }
    store.dispatch({type: 'list/add', newItem})
}

const clearItems = () => {
    store.dispatch({type: 'list/clear'})
}

submitBtn.addEventListener('click', addItem)
clearBtn.addEventListener('click', clearItems)

// Subscriptions ?? ----------------------------
const render = () => {

list.innerHTML = ''
    const groceryItems = store.getState().groceries // [{text: 'random'}, {}, {}]
    const listElements = groceryItems.map((item)=> {
        let listItem = document.createElement('li')
        listItem.textContent = item.text
        return listItem;
    })
list.append(...listElements)
}
store.subscribe(render)
// populate the list
    //have a reference to the list
     //have a reference to the input
      //have a reference to the submit button
      // create an event listener on submit button
    //have a function to create li elements and append to said list

//equip the clear button with the functinality to clear the list
    //have a reference to the clear button
    //a reference to the list
    // set up event listener
        // a function to wipe the list