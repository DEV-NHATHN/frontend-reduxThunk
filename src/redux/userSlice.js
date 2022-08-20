import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
   name: "user",
   initialState: {},
   reducers: {
      setUser: (state, action) => {
         state.loading = false;
         state.error = false;
         state.name = action.payload.name;
         state.age = action.payload.age;
         state.about = action.payload.about;
         state.theme = action.payload.theme;
         state.url = action.payload.url;
      },
      updateStart: (state, action) => {
         state.loading = true;
      },
      updateSuccess: (state, action) => {
         state.loading = false;
         state.error = false;
         state.name = action.payload.name;
         state.age = action.payload.age;
         state.about = action.payload.about;
         state.theme = action.payload.theme;
         state.url = action.payload.url;
      },
      updateFailure: (state, action) => {
         state.loading = false;
         state.error = true;
      },
   }
})

export const { setUser, updateStart, updateSuccess, updateFailure } = userSlice.actions
export default userSlice.reducer