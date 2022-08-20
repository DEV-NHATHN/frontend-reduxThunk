import { setUser, updateStart, updateSuccess, updateFailure } from './userSlice.js'
import axios from 'axios'

export const updateUser = async (user, dispatch) => {
   dispatch(updateStart())
   try {
      const res = await axios.post("/v1/update", user)
      dispatch(updateSuccess(res.data))
   } catch (error) {
      dispatch(updateFailure())
   }
}

export const getUser = async (dispatch) => {
   dispatch(updateStart())
   try {
      const res = await axios.get("/userInfo")
      dispatch(setUser(res.data))
   } catch (error) {
      dispatch(updateFailure())
   }
}

