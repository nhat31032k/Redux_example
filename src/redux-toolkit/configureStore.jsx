import {
  configureStore,
  combineReducers,
  MiddlewareArray,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import globalSlice, { toggleDarkMode } from "./globalSlice";
import logger from "redux-logger";
const reducer = combineReducers({
  global: globalSlice,
});
// khởi tạo hàm middleWare
//  redux logger
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log(action);
//   next(action);
// };
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
//tạo miaddle ware để lấy state của globalSlice
// store.subscribe(() => {
//   console.log(store.getState().global.darkMode);
// });
//dispatch action
store.dispatch(toggleDarkMode(true));
export default store;
