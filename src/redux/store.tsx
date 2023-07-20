import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./reducer"
import { createStore } from "redux"

const persistConfig = {
   key: "root",
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
