import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import postReducer from './postSlice.js'
import galleryReducer from './gallerySlice.js'



export default configureStore({
   reducer: {
      user: userReducer,
      post: postReducer,
      gallery: galleryReducer
   },
   middleware: [...getDefaultMiddleware({ thunk: true })]
})