import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import ReduxLogger from "redux-logger"
import { AuthReducer, ScreenReducer, SettingReducer, SideBarReducer, TableHeaderReducer } from '../Reducers';
import ModalReducer from '../Reducers/ModalReducer/ModalReducer';
import UpdateReducer from '../Reducers/UpdateReducer/UpdateReducer';


const persistConfig = {
  key: 'root',
  storage: storage,
  blackList: ["setting", 'auth', 'screen', 'modal']
};

const reducers = combineReducers({
  setting: SettingReducer,
  auth: AuthReducer,
  screen: ScreenReducer,
  sideBar: SideBarReducer,
  modal: ModalReducer,
  tableHeader: TableHeaderReducer,
  update: UpdateReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }).concat(ReduxLogger),
});
const persistor = persistStore(store)
export {
  store, persistor
}
