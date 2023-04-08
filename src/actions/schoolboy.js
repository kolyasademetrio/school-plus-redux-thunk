import {
   SET_SCHOOLBOY,
} from './types/schoolboy';

export const setSchoolboy = schoolboy => ({
   type: SET_SCHOOLBOY,
   payload: schoolboy
});