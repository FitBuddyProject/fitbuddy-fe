import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';

// reducer-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


// roots
import rootReducer from "./root/rootReducer";
import rootSaga from "./root/rootSaga";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
        serializableCheck: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };