import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
   name: "post",
   initialState: {
      posts: [
         {
            title: "",
            description: "",
            tag: 0,
            image: ""
         }
      ]
   },
   reducers: {
      createPost: (state, action) => {
         state.loading = false;
         state.error = false;
         state.posts = [...state.posts, action.payload]
      },
      updateStart: (state, action) => {
         state.loading = true;
      },
      updateSuccess: (state, action) => {
         state.loading = false;
         state.error = false;
      },
      updateFailure: (state, action) => {
         state.loading = false;
         state.error = true;
      },
   }
})

export const { createPost, updateStart, updateSuccess, updateFailure } = postSlice.actions
export default postSlice.reducer