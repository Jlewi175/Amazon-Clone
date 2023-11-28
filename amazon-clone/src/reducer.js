export const initialState = {
    cart:[]
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
       case 'ADD_TO_CART':   
       //Adding to cart
       return {...state,
    cart: [...state.cart, action.item],
};
       
       case 'REMOVE_FROM_CART':
        //removing from cart
        return {state};

        default:
            return state;

    }
}

export default reducer;