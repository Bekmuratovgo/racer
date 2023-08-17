import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableReducer from "./table.slice";

const rootReducer = combineReducers({
  tableReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}