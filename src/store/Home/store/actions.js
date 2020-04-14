import axios from "axios";
import { CHANGE_LIST } from "./constants";

// 普通action
const changeList = (list) => ({
	type: CHANGE_LIST,
	list,
});

// 使用redux-thunk中间件
export const getHomeList = () => {
	return (dispatch) => {
		return axios.get("http://localhost:4000/list.json").then((res) => {
			const list = res.data.data;
			dispatch(changeList(list));
		});
	};
};
