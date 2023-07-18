const redux = require('redux')

const createStore = redux.createStore;


const CAKE_ORDERD= 'CAKE_ORDERED';


function orderCake(){
    return {
        type:CAKE_ORDERD,
        quantity:1, 
    }
}

const initialState = {
    numofCakes : 10,

}

const reducer=(state = initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERD:
            return{
                numofCakes:state.numofCakes-1,
            }
            default:
                return state;
    }

}




const store = createStore(reducer)

console.log(store.getState())

store.subscribe(()=>console.log(store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
