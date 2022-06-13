import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './homeReducer'
import userReducer from './userReducer'

export default configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer
  }
})