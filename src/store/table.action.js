import axios from "axios";
import { tableSlice } from "./table.slice";

const url = process.env.REACT_APP_BASE_URL
export const getUsers = (page = 1) => async dispatch => {
  dispatch(tableSlice.actions.setLoading(true))
  try {
    const res = await axios(`${url}/?page=${page}`);
    const data = res.data.results.slice(0, 50).map((item) => {
      return {
        ...item,
        isSelected: false
      }
    })
    dispatch(tableSlice.actions.setUsersuccess(data))
  } catch (error) {
    console.log(error, 'ERR');
  }
  dispatch(tableSlice.actions.setLoading(false))
}