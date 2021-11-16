import { contentAPI } from "../Api/api";

export const setNewCurrency = (currently) =>({ type: 'content-reducer/SET-NEW-CURRENCY', currently: currently})
export const funcFetching = (isFetching) =>({type: 'content-reducer/IS-FETCHING', isFetching:isFetching})

const SET_NEW_CURRENCY = 'content-reducer/SET-NEW-CURRENCY';
const IS_FETCHING = 'content-reducer/IS-FETCHING'

let defaultState = {
    currently: [ ],
    isFetching: false,
}

export const contentReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        case SET_NEW_CURRENCY: {

            return {
                ...state,
                currently: [...state.currently, ...action.currently]
            }
        };
        case IS_FETCHING : {
            return {
                ...state, isFetching:action.isFetching
            }
        };
        default:
            return state;
    }
};


export const addCurrently = () => async (dispatch) =>{

    let response = await contentAPI.setCurrency()
        dispatch(setNewCurrency(response));
        dispatch(funcFetching(true))
}
