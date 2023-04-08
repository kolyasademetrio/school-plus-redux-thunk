import {
   SET_COLUMNS,
} from './types/columns';

export const setColumns = columns => ({
   type: SET_COLUMNS,
   payload: columns
});

// export const setPricesHistory = prices => {
//    const result = {};
//    prices.forEach(({
//        ticker,
//        price,
//        lastTradeTime
//    }) => {
//        result[ticker] = {
//            id: ticker,
//            ticker: ticker,
//            price: price,
//            time: lastTradeTime
//        }
//    });
//    return {
//        type: SET_PRICES_HISTORY,
//        payload: result
//    };
// };