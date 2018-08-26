# refactor-state-to-redux-build-and-burn-lightning



Refactoring State into implementing Redux 



Step One / Intro

* REDUX will efficiently manage your overall APPLICATION STATE. Like a bank vault, it’s got a STORE to do that. 

* We need the state object to be taking out of the app.js component and have it managed by redux. 

$NPM i redux

$yarn add redux 






STEP TWO 

Creating the redux store 

WHAT IS A STORE?  (The Vault) 

	- From an earlier explanation, you should remember the analogy between the BANK VAULT and the REDUX STORE. The Bank Vault keeps money, the Redux store keeps the application state object. 



* First we import the createStore factory function from Redux. Then we invoke the function 
createStore() to create the store.

import { createStore } from "redux"; //an import from the redux library

const store = createStore();  // an incomplete solution - for now.

** you have to pass in mandatory reducer as the first argument 

const store = createStore(reducer);

. 






Step 3 

WHAT IS A REDUCER?  (The Cashier) 

*Reducers are the most important concept in Redux. 


* The cashier (reducer) and the Vault (store)  are always in sync (Best friends) 

* The createStore() function takes in a few arguments, the first being the reducer

- The creation of the store needs to be invoked with a Reducer, and that is mandatory. 
The reducer is the only mandatory argument passed into the createStore()

* The Redux Reducer is a function that takes in two arguments, the first being the state of 
the app (reducer) and the second argument being the Action.  


The reducer function passed into createStore doesn’t exist yet. Now we need to write one. The reducer is just a function, remember? 
Create a new directory called, reducers and create an reducer.js file in there. Essentially, our reducer function will be in the path, src/reducers/reducer.js 
First export a simple function in this file: 
   export default () => {
   }

- pass our first argument state into the function; 

export default (state) => {

}

import reducers/reducer.js into app.js file


STEP 4 Create the initialState object 

const initialState = {
	name: “stuff”
}

pass initial state into the store


- const store = createStore(reducer, initialState);


Step 5 

insert the getState() method into the attribute. 

store.getState().name
	








