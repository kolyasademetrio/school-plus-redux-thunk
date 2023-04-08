import {
   SET_SCHOOLBOY,
} from '../actions/types/schoolboy';

const initialState = {
   items: [],
   // history: [],
};

const schoolboyReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SCHOOLBOY:
         return {
            ...state,
            items: action.payload,
         };
      default:
         return state;
   }
}
export default schoolboyReducer;