// Funciones del Carrito de Compras.

export const cartReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
        case 'delete':
            return state.filter( getId => getId.id !== action.payload);
        case 'deleteall':
            return state = [];
        // case 'totalprice':
        //     return state?.map( getPrice => {
        //         return console.log(getPrice.amount)
        //         // let price = 0;
        //         // getPrice.amount = price;
        //         // let finalprice = 0;
        //         // finalprice + price;
        //         // return finalprice;
        //         // if(getPrice.amount > 1){
        //         //     return 
        //         // }
        //     })
        
        default:
            return state;
    }
}