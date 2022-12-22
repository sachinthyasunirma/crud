import CategoryAPI from "../../../API/Category/CategoryAPI"
import { CategoryActionTypes } from "../ActionTypes/Category.ActionTypes"

export const fetchCategories = () => async (dispatch) => {
    const response = await CategoryAPI.get('/get/all')
    dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES,
        payload: response
    })
}