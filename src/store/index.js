import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./homeReducer"
export default configureStore({
  reducer: { home: homeReducer },
})
