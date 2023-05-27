import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js"; // 슬라이스 파일 임포트로 분할가능

let stock = createSlice({
	name: "stock",
	initialState: [10, 11, 12],
});

/** 장바구니 들어있는 갯수 변경 */
let cartContents = createSlice({
	name: "cart",
	initialState: [
		{ id: 0, name: "White and Black", count: 2 },
		{ id: 2, name: "Grey Yordan", count: 1 },
	],
	reducers: {
		changeItemNum(state, id) {
			let newState = state.map((i) => {
				if (i.id === id.payload) {
					i.count += 1;
					return i;
				} else {
					return i;
				}
			});
			state = newState;
		},
		addItems(state, action) {
			let newState = null;
			let idArray = state.map((i) => i.id);
			// if (idArray.find((i) => i === action.payload.id)) {
			// find로 하면 id가 0인 친구의 경우, 반환값이 falsy돼서 안됨
			if (idArray.includes(action.payload.id)) {
				newState = state.map((i) => {
					if (i.id === action.payload.id) {
						i.count += 1;
						return i;
					} else {
						return i;
					}
				});
				state = newState;
			} else {
				state.push(action.payload);
			}
		},
	},
});

export let { changeItemNum, addItems } = cartContents.actions;

export default configureStore({
	reducer: {
		user: user.reducer,
		stock: stock.reducer,
		cartContents: cartContents.reducer,
	},
});
