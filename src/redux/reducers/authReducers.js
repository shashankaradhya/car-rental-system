let initialAuthState = {
    current_user: null,
    status: 'idle',
    error: null
};

export default function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case 'loggedOut': return({
            ...state,
            status: 'idle'
        })
        case 'login/pending':
            return ({
                ...state,
                status: 'pending'
            })
        case 'login/completed':
            return ({
                ...state,
                current_user: action.payload.current_user,
                status: 'successful'
            })
        case 'login/failed':
            return ({
                ...state,
                error: action.payload.error,
                status: 'failed'
            })
        case 'signup/pending':
            return ({
                ...state,
                status: 'pending'
            })
        case 'signup/completed':
            return ({
                ...state,
                current_user: action.payload.current_user,
                status: 'successful'
            })
        case 'signup/failed':
            return ({
                ...state,
                error: action.payload.error,
                status: 'failed'
            })
        default:
            return (state);
    }
}