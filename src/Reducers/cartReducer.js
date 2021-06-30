// Funciones del Carrito de Compras.

export const cartReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
        case 'delete':
            return state.filter( getId => getId.id !== action.payload.GetRowToDelete);
        case 'deleteall':
            return state = [];
        
        default:
            return state;
    }
}