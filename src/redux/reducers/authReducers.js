import { auth } from '../../auth/firebaseManagment';

let initialAuthState = {
    current_user: null
};

export default function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case "auth/login":
            {
                let email = action.payload.email;
                let password = action.payload.password;
                auth.signInWithEmailAndPassword(email, password);
                break;
            }
        case 'auth/signup':
            {
                let email = action.payload.email;
                let password = action.payload.password;
                auth.createUserWithEmailAndPassword(email, password);
                break;
            }
        default:
            {

            }
    }
}