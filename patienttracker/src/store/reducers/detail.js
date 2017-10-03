import { DetailAction } from '../actions';

const DetailsReducers = (state = {
    PatientsDetails: [],
}, action) => {
    switch (action.type) {
        case DetailAction: {
            return state = {
                ...state,
                PatientsDetails: action.payload
            }
        }
        default: { }
    }
    return state;
}
export default DetailsReducers;
