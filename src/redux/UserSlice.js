import { createSlice } from "@reduxjs/toolkit";

// const UserSlice = {};
// const UserSlice = createSlice();
// const UserSlice = createSlice({});

// const UserSlice = createSlice({
//     name: '',
//     initialState: {},
//     reducers: {}
// });

// const UserSlice = createSlice({
//     name: 'userData',
//     initialState: {
//         userState: {}
//     },
//     reducers: {
//         setUserState: () => { }
//     }
// });

const UserSlice = createSlice({
    name: 'userData',
    initialState: {
        userState: {}
    },
    reducers: {
        setUserState: (state, action) => {
            console.log(action.payload);
            state.userState = action.payload;
        }
        // , more reducers  
    }
});

export default UserSlice.reducer;

export const { setUserState } = UserSlice.actions;






