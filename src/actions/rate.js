import {
   SET_RATE,
} from './types/rate';

export const setRate = rate => ({
   type: SET_RATE,
   payload: rate
});