import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mainReducer from './reducers/mainReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    whitelist: ['loginState'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);