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

function reducer(state = initialState,action){
    switch(action.type){
        case CAKE_ORDERD:
            return{
                numofCakes:state.numofCakes-1,
            }
            default:
                return state;
    }

}