import { columnURL, rateURL, schoolboyURL} from '../hooks/useAllData';
import { setColumns } from './columns';
import { setRate } from './rate';
import { setSchoolboy } from './schoolboy';

export const getAllData = () => async dispatch => {
   const result = (
      await Promise.all([
         fetch(columnURL),
         fetch(rateURL),
         fetch(schoolboyURL),
      ])
   ).map(res => res.json());

   const [columnResult, rateResult, schoolboyResult] = await Promise.all(result);

   dispatch(setColumns(columnResult.Items));
   dispatch(setRate(rateResult.Items));
   dispatch(setSchoolboy(schoolboyResult.Items));
};

export const postData = (url, data) => async dispatch => {
   return fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
   }).then(res => {
      if (res.status === 200) {
         fetch(rateURL)
            .then(json => json.json())
            .then(res => {
               dispatch(setRate(res.Items));
            });
      }
   });
};