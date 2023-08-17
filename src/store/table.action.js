import axios from "axios";
import { tableSlice } from "./table.slice";

const url = process.env.REACT_APP_BASE_URL
export const getUsers = (page = 1) => async dispatch => {
  dispatch(tableSlice.actions.setLoading(true))
  try {
    const res = await axios(`${url}/?page=${page}`);
    dispatch(tableSlice.actions.setUsersuccess(res.data.results.slice(0, 50)))
  } catch (error) {
    console.log(error, 'ERR');
  }
  dispatch(tableSlice.actions.setLoading(false))
}