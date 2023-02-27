import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tab: "all",
}
const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateTab(state, action) {
      state.tab = action.payload
    },
  },
})
export const { updateTab } = homeReducer.actions
export default homeReducer.reducer
