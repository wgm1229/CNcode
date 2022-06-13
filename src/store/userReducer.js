import { createSlice } from '@reduxjs/toolkit'
//初始值
const initialState = {
  userid: ''
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserid (state, action) {
      state.userid = action.payload
    }
  }
})
export const { updateUserid } = userReducer.actions

export default userReducer.reducer