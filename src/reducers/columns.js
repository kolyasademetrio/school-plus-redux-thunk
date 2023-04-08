import {
   SET_COLUMNS,
} from '../actions/types/columns';

const initialState = {
   items: [],
};

const columnsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_COLUMNS:
         return {
            ...state,
            items: action.payload,
         };
      default:
         return state;
   }
}
export default columnsReducer;