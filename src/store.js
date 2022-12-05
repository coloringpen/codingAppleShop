import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'john ' + state;
    },
    changeAge(state) {
      state.age += 1;
    },
  },
});

export let { changeName, changeAge } = user.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let cartContents = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    changeItemNum(state, item) {
      let newState = state.map((i) => {
        if (i.id === item.id) {
          i.count += 1;
          return i;
        } else {
          return i;
        }
      });
      state = newState;
    },
  },
});

export let { changeItemNum } = cartContents.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartContents: cartContents.reducer,
  },
});
