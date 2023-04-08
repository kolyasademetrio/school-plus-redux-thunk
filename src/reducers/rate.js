import {
   SET_RATE,
} from '../actions/types/rate';

const initialState = {
   items: [],
   // history: [],
};

const rateReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_RATE:
         return {
            ...state,
            items: action.payload,
         };
      default:
         return state;
   }
}
export default rateReducer;