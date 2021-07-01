export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case 'login':
            return {
                googleId: action.payload.googleId,
                name: action.payload.name,
                email: action.payload.email,
                imageUrl: action.payload.imageUrl
            }

        case 'logout':
                return { }
    
        default:
            return state;
    }

}

