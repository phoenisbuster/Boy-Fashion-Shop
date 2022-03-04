import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import userReducer from '../slices/userSlice'
import {combineReducers} from "redux";
import {
    persistStore,
    persistCombineReducers,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {
      key: 'root',
      version: 1,
      storage,
    }   
    const rootReducer = combineReducers({
        cart: cartReducer,
        user: userReducer
    });

    const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
