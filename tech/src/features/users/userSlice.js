import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Dave Patrick", email: "dave@gmail.com", number : "123456789", password : "1234" },
    { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" , number : "9876543210", password : "1534"},
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      userAdded(state, action) {
        state.push(action.payload);
      },
      userUpdated(state, action) {
        const { id, name, email,number,password } = action.payload;
        const existingUser = state.find((user) => user.id === id);
        if (existingUser) {
          existingUser.name = name;
          existingUser.email = email;
          existingUser.phonenumber = number;
          existingUser.password = password;
        }
      },
      userDeleted(state, action) {
        const { id } = action.payload;
        const existingUser = state.find((user) => user.id === id);
        if (existingUser) {
          return state.filter((user) => user.id !== id);
        }
      },
    },
  });
    export const {userAdded,userUpdated,userDeleted} = usersSlice.actions;

    export default usersSlice.reducer;