import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import isAuthReduser from '../reducers/isAuth';


//Store Configuration

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

export default () => {
    const store = configureStore({
        reducer: {
            isAuth:  isAuthReduser
        },
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    return store;
};



