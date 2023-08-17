import axios from "axios";
import { tableSlice } from "./table.slice";

export const getUsers = (page = 1) => async dispatch => {
  dispatch(tableSlice.actions.setLoading(true))
  try {
    const res = await axios(`https://devapi.almurut.com/api/test/racers/?page=${page}`)
    dispatch(tableSlice.actions.setUsersuccess(res.data.results.slice(0, 50)))
  } catch (error) {
    console.log(error, 'ERR');
  }
  dispatch(tableSlice.actions.setLoading(false))
}