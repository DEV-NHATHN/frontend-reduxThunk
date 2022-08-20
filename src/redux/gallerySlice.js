import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const getPhotos = createAsyncThunk(
   'photos/getPhotos', // name => indentify action that run Func
   async () => {
      try {
         // const res = await fetch('https://picsum.photos/v2/list?page=3&limit=9')
         // const formattedResponse = await res.json()

         const res = await axios.get('https://picsum.photos/v2/list?page=3&limit=9')
         const formattedResponse = await res.data
         return formattedResponse
      } catch (error) {
         console.error(error)
      }
   }
)

export const gallerySlice = createSlice({
   name: "gallery",
   initialState: {
      photos: [],
      isLoading: false
   },
   reducers: {
      // getPhotos: (state, action) => {
      //    state.isLoading = false;
      //    state.photos = [...state.photos, action.payload]
      // },
      updateStart: (state) => {
         state.isLoading = true;
      },
      updateSuccess: (state, action) => {
         state.isLoading = false;
         state.photos = action.payload
      },
      updateFailure: (state) => {
         state.isLoading = false;
      },
   },
   extraReducers: {
      [getPhotos.pending]: (state) => {
         state.isLoading = true;
      },
      [getPhotos.fulfilled]: (state, action) => {
         state.photos = action.payload;
         state.isLoading = false;
      },
      [getPhotos.rejected]: (state) => {
         state.isLoading = false;
      }
   }
})

// export const { } = gallerySlice.actions
export default gallerySlice.reducer