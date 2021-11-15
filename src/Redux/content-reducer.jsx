import { contentAPI } from "../Api/api";

export const setNewCurrency = (currently) =>({ type: 'content-reducer/SET-NEW-CURRENCY', currently: currently})


const SET_NEW_CURRENCY = 'content-reducer/SET-NEW-CURRENCY';


let defaultState = {
    currently: [ ],
}

export const contentReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        case SET_NEW_CURRENCY: {

            return {
                ...state,
                currently: [...state.currently, ...action.currently]
            }
        };
        default:
            return state;
    }
};


export const addCurrently = () => async (dispatch) =>{
    let response = await contentAPI.setCurrency()
        dispatch(setNewCurrency(response));
}
